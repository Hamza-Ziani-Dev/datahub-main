import { Injectable } from "@angular/core";
import { Observable, Subject, of } from "rxjs";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from "@angular/common/http";
import * as jwt_decode from "jwt-decode";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { MatDialog } from "@angular/material/dialog";
import { VersionComponent } from "src/app/shared/components/version/version.component";
import { CharedService } from "src/app/services/chared.service";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class authService {
  ID_TOKEN: string = environment.ID_TOKEN;
  ACCESS_TOKEN: string = environment.ACCESS_TOKEN;
  REFRESH_TOKEN: string = environment.REFRESH_TOKEN;
  authStatus;
  updatedAuthStatus = new Subject<boolean>();
  user;
  alertes;
  updatedUser = new Subject();
  updatedAlertes = new Subject();
  errorMessage = new Subject<string>();
  link;
  API;
  API2;
  endpoint = "auth";
  constructor(
    private charedService: CharedService,
    private dialog: MatDialog,
    private http: HttpClient,
    private router: Router
  ) {
    this.link = environment.link;
    this.API = environment.API;
    this.API2 = environment.API2;
  }
  getUpdatedAuthSTatus() {
    return this.updatedAuthStatus.asObservable();
  }
  getUpdatedAlertes() {
    return this.updatedAlertes.asObservable();
  }
  getUpdatedUser() {
    this.getUser();
    return this.updatedUser.asObservable();
  }
  getErrorMessageListener() {
    return this.errorMessage.asObservable();
  }

  RefreshVersion() {
    this.http
      .get(
        `${this.link}/${environment.API2}/user/udpate-version/${environment.version}`
      )
      .subscribe(
        (response: any) => {
          this.userByToken().subscribe(
            (token: any) => {
              const user = this.getDecodedAccessToken(token.idToken);
              this.user = user;
              this.startRefreshTokenTimer();
              this.updatedUser.next(user);
              this.authStatus = true;
              this.updatedAuthStatus.next(true);
              window.location.reload();
              return this.goToDefaultNavigate();
            },
            (_error: any) => {
              // console.log(_error);
              this.errorMessage.next(_error.error.errorMessage);
            }
          );
          // const token = response.token;
          // localStorage.setItem("token", response.token);
          // this.authStatus = true;
          // this.updatedAuthStatus.next(true);
          // const decodedToken = this.getDecodedAccessToken(token);
          // this.user = decodedToken.user;
          // this.updatedUser.next(decodedToken.user);
          // window.location.reload();
        },
        (error: any) => {
          this.errorMessage.next(error.error.errorMessage);
        }
      );
  }

  login(email: string, password: string) {
    const infos = {
      email: email,
      password: password,
      version: environment.version,
    };
    this.http
      .post(`${this.link}/${environment.API2}/user/login`, infos, {
        withCredentials: true,
      })
      .subscribe(
        (response: any) => {
          if (!("error" in response)) {
            localStorage.clear();
            this.storeTokens({
              accesstoken: response?.access,
              refreshtoken: response?.refresh,
            });
            this.userByToken().subscribe(
              (token: any) => {
                const user = this.getDecodedAccessToken(token.idToken);
                this.user = user;
                this.startRefreshTokenTimer();
                this.updatedUser.next(user);
                this.authStatus = true;
                this.updatedAuthStatus.next(true);

                if (this.user?.id) {
                  this.getPalettes(this.user?.id).subscribe((palette) => {
                    Object.keys(palette).forEach((key) => {
                      this.charedService.updatePlatformColor(key, palette[key]);
                    });
                  });
                }
                this.goToDefaultNavigate();
              },
              (_error: any) => {
                this.errorMessage.next(_error.error.error);
              }
            );
          } else {
            this.updatedAuthStatus.next(true);
          }
        },
        (error: HttpErrorResponse) => {
          this.errorMessage.next(error.error.error);
        }
      );
  }

  goToDefaultNavigate(): boolean {
    // if (['ET'].includes(this.user?.role)) {
    //     this.router.navigate(['/effectif/myTeam']);
    //  }else
    if (["hotel"].includes(this.user?.role)) {
      this.router.navigate(["/stages/list"]);
    } else if (
      ["DTR-ADMINISTATEUR", "DTR-CONTROLLER", "RESPONSABLE-CENTRE"].includes(
        this.user?.role
      )
    ) {
      this.router.navigate(["/calendrier"]);
    } else if (
      ["SCOUTING-ADMINISTATEUR", "SCOUTING-CONTROLLER"].includes(
        this.user?.role
      )
    ) {
      if (this.user?.permissions.includes("scouting_men")) {
        this.router.navigate(["/scouting-m", "men", "A19L5vu8lguQ2"]);
      } else if (this.user?.permissions.includes("scouting_ligue_men")) {
        this.router.navigate(["/scouting-ligue-m", "men", "CmRSQLlOC39V2"]);
      } else if (this.user?.permissions.includes("scouting_women")) {
        this.router.navigate(["/scouting-w", "women", "A19L5vu8lguQ2"]);
      } else if (this.user?.permissions.includes("scouting_ligue_women")) {
        this.router.navigate(["/scouting-ligue-w", "women", "CmRSQLlOC39V2"]);
      } else {
        return false;
      }
    } else {
      this.router.navigate(["/dashboard"]);
    }
    return false;
  }

  logout() {
    this.http
      .post(`${this.link}/${environment.API2}/logout/one`, { refresh: this.getRefreshToken(), type: this.user?.type ?? 'owner', owner: this.user?.id ?? 0 })
      .subscribe((response) => { });
    localStorage.removeItem(this.ID_TOKEN);
    this.removeTokens();
    this.stopRefreshTokenTimer();
    this.user = null;
    // this.updatedAuthStatus.next(false);
    this.updatedUser.next(null);
    this.authStatus = false;
    this.dialog.closeAll();
    this.router.navigate(["/login"]);
  }
  // NEW ANAS
  private refreshTokenTimeout?: any;
  public startTokenRefreshTimer() {
    this.startRefreshTokenTimer();
  }
  private startRefreshTokenTimer() {
    // set a timeout to refresh the token a minute before it expires
    // console.log("startRefreshTokenTimer");

    try {
      const expires = this.getTokenExpirationDate(
        localStorage.getItem(this.ACCESS_TOKEN)
      );
      const timeout = expires.getTime() - Date.now() - 60 * 1000;
      this.refreshTokenTimeout = setTimeout(() => {
        this.refreshToken()?.subscribe();
      }, timeout);
    } catch (error) {
      console.error(error);
    }
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
  loadingAccess: boolean = false;
  refreshToken() {
    const refresh = this.getRefreshToken();
    if (!this.loadingAccess && refresh) {
      this.loadingAccess = true;
      return this.http
        .post<any>(`${this.link}/${environment.API2}/token/access`, {
          refresh,
        })
        .pipe(
          tap((response) => {
            this.storeTokens({
              accesstoken: response.access,
              refreshtoken: response.refresh,
            });
            this.loadingAccess = false;
            this.userByToken().subscribe(
              (token: any) => {
                const user = this.getDecodedAccessToken(token.idToken);
                this.user = user;
                this.startRefreshTokenTimer();
                this.updatedUser.next(user);
                this.authStatus = true;
                this.updatedAuthStatus.next(true);
              },
              (_error: any) => {
                this.errorMessage.next(_error.error.errorMessage);
              }
            );
          }),
          catchError((error) => {
            this.loadingAccess = false;
            this.logout();
            // console.log(error,"error from auth");
            return of(false);
          })
        );
    }
  }

  userByToken() {
    return this.http.get<any>(`${this.link}/${environment.API2}/user/me`).pipe(
      tap((tokens) => {
        // console.log(tokens.idToken);
        // this.storeTokens(tokens);
        localStorage.setItem(this.ID_TOKEN, tokens.idToken);
      }),
      catchError((error) => {
        // this.logout();
        return of(false);
      })
    );
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  getToken() {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }
  private storeToken(jwt: string) {
    localStorage.setItem(this.ACCESS_TOKEN, jwt);
  }

  private storeTokens(tokens) {
    localStorage.setItem(this.ACCESS_TOKEN, tokens.accesstoken);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshtoken);
  }

  private removeTokens() {
    localStorage.removeItem(this.ACCESS_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  // END ANAS

  checkAuth(): boolean {
    const expired = this.isTokenExpired();
    if (expired) {
      this.authStatus = false;
      this.updatedAuthStatus.next(false);
      return;
    }
    this.authStatus = true;
    this.updatedAuthStatus.next(true);
  }
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
  isAllowedRoute(state) {
    let token = localStorage.getItem(this.ID_TOKEN);
    if (
      !this.user &&
      ([
        "SCOUTING-ADMINISTATEUR",
        "SCOUTING-CONTROLLER",
        "ENTRAINEUR",
        "hotel",
        "RESPONSABLE-CENTRE",
        "stage",
        "team_manager",
        "DTR-ADMINISTATEUR",
        "DTR-CONTROLLER",
        "FRMF",
      ].includes(this.user?.role) ||
        this.user?.type == "owner")
    )
      return true;

    if (
      !this.user &&
      ((this.user?.role == "CONTROLLER" &&
        state.url.split("/")[1] == "controlle-panel") ||
        state.url == "/myaccount/clubs" ||
        state.url.split("/")[1] == "support")
    )
      return true;

    return true;
  }
  isNewsVersion() {
    if (this.user != null) {
      if (
        this.user?.permissions &&
        this.user?.permissions.includes("scouting")
      ) {
        this.logout();
        return false;
      }
      if (
        this.user?.role == "MEDECIN" &&
        (this.user?.permissions.includes("scouting_men") ||
          this.user?.permissions.includes("scouting_women"))
      ) {
        this.logout();
        return false;
      }
      let version = environment?.version || null;
      let user_version = this.user?.version || null;
      // && localStorage.getItem('version') == undefined
      if ([user_version, version].includes(null) || user_version != version) {
        this.dialog.closeAll();
        const dialogRef = this.dialog.open(VersionComponent, {
          width: "450px",
        });
        return dialogRef.afterClosed().subscribe((data) => {
          if (this.user != null && this.user?.version == undefined) {
            this.logout();
          } else {
            this.charedService
              .ClearLocalStorage([
                "training",
                "rapport-scouting",
                "database-scouting-",
                "players-scouting",
              ])
              .subscribe((responce: boolean) => {
                if (responce) this.RefreshVersion();
              });
          }
          return false;
        });
      }
    }
    return true;
  }
  isTokenExpired(token?: string): boolean {
    if (!token) token = localStorage.getItem(this.ACCESS_TOKEN);
    if (!token) {
      this.updatedAuthStatus.next(false);
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      this.updatedAuthStatus.next(true);
      return false;
    }
    this.updatedAuthStatus.next(date.valueOf() > new Date().valueOf());
    return !(date.valueOf() > new Date().valueOf());
  }

  getStatus() {
    return this.authStatus;
  }
  getUser() {
    const idToken = localStorage.getItem(this.ID_TOKEN);
    try {
      this.user = this.getDecodedAccessToken(idToken);
      this.updatedUser.next(this.user);
      return this.user;
    } catch (Error) {
      this.user = null;
      this.updatedUser.next(this.user);
      this.logout();
      return null;
    }
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getEquipes() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/equipes`);
  }
  geListEquipes() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/equipes-list`
    );
  }
  allEquipes() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/equipes-all`
    );
  }
  getEquipe(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/equipe/${id}`
    );
  }
  getSaisons() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/saisons`);
  }
  getSaisonRows(saison, toSaison, table) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/saisonRows/${saison}/${toSaison}/${table}`
    );
  }

  deleteEquipe(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/equipe/${id}`
    );
  }
  transferRows(rowsToSend, fromSaison, transferTable, toSaison) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/transferRows/${fromSaison}/${toSaison}/${transferTable}`,
      { rowsToSend: rowsToSend }
    );
  }
  addEquipe(equipe, img) {
    let data = new FormData();
    data.append("nom", equipe.nom);
    data.append("slug", equipe.slug);
    data.append("color", equipe.color);
    data.append("categorie", equipe.categorie);
    data.append("index_sort", equipe.index_sort);
    data.append("fullname", equipe.fullname);
    data.append("image", img);
    data.append("base_img", null);
    return this.http.post(
      `${this.link}/${environment.API2}/${this.endpoint}/equipe`,
      data
    );
  }
  updateEquipe(equipe, id, img) {
    let data = new FormData();
    data.append("nom", equipe.nom);
    data.append("slug", equipe.slug);
    data.append("index_sort", equipe.index_sort);
    data.append("color", equipe.color);
    data.append("genre", equipe.genre);
    data.append("sexe", equipe.sexe);
    data.append("fullname", equipe.fullname);
    data.append("categorie", equipe.categorie);
    data.append("logo", equipe.logo);
    data.append("image", img);
    data.append("base_img", null);
    this.http
      .post(
        `${this.link}/${this.API}/${this.endpoint}/updateEquipe/${id}`,
        data
      )
      .subscribe((response: any) => {
        if (id == this.user?.clubId) {
          const token = response.token;
          localStorage.setItem("token", response.token);
          const decodedToken = this.getDecodedAccessToken(token);
          this.user = decodedToken.user;
          this.updatedUser.next(decodedToken.user);
        }
        this.router.navigate(["/myaccount/clubs"]);
      });
  }
  updateUser(user): Observable<any> {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateUser`,
      user
    );
    // .subscribe((response: any) => {
    //   const token = response.token;
    //   localStorage.setItem("token", response.token);
    //   const decodedToken = this.getDecodedAccessToken(token);
    //   this.user = decodedToken.user;
    //   this.updatedUser.next(decodedToken.user);
    // });
  }
  changeClub(id, type: number = 0) {
    this.http
      .get(`${this.link}/${this.API}/user/switch-equipe/${id}`)
      .subscribe((response: any) => {
        this.userByToken().subscribe(
          (token: any) => {
            const user = this.getDecodedAccessToken(token.idToken);
            this.user = user;
            this.startRefreshTokenTimer();
            this.updatedUser.next(user);
            this.authStatus = true;
            this.updatedAuthStatus.next(true);
            let url = this.router.url;
            this.router
              .navigateByUrl("/dashboard", { skipLocationChange: true })
              .then(() => this.router.navigate([url]));
          },
          (_error: any) => {
            // console.log(_error);
            this.errorMessage.next(_error.error.errorMessage);
          }
        );
      });
  }
  getClub(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/club/${id}`
    );
  }
  changeSaison(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/changeSaison/${id}`)
      .subscribe((response: any) => {
        const token = response.token;
        localStorage.setItem("token", response.token);
        const decodedToken = this.getDecodedAccessToken(token);
        this.user = decodedToken.user;
        this.updatedUser.next(decodedToken.user);
      });
  }
  getPalettes(id: number): Observable<any> {
    return this.http.get<any>(`${this.link}/${this.API}/palettes/${id}`);
  }
  getAlertes() {
    this.http
      .get(`${this.link}/${this.API}/joueur/getAlerte`)
      .subscribe((response: Array<any>) => {
        this.alertes = response;
        this.updatedAlertes.next(response);
      });
  }
  uploadFileGoogleDrive(file, token: string) {
    environment.access_token = token;
    const req = new HttpRequest(
      "POST",
      "https://www.googleapis.com/upload/drive/v2/files",
      file,
      {
        headers: new HttpHeaders().set(
          "content-type",
          "application/x-www-form-urlencoded"
        ),
        params: new HttpParams().set(
          "key",
          "AIzaSyDcOuyy2oc-evQPF3F-GPQOPsiHx_XUMl8"
        ),
        reportProgress: true,
        responseType: "json",
      }
    );

    return this.http.request(req);
  }
  getRefreshTokenGoogleDrive() {
    let params = new HttpParams();
    params = params.append(
      "client_secret",
      "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"
    );
    params = params.append("grant_type", "refresh_token");
    params = params.append(
      "client_id",
      "169011606331-ualgrvc2khuo7qmc8giee68kn9ln7r7e.apps.googleusercontent.com"
    );
    let req = new HttpRequest(
      "POST",
      "https://oauth2.googleapis.com/token?refresh_token=1%2F%2F04dPTGmQZ_gMICgYIARAAGAQSNwF-L9IrE3ORp-CxK-v3zCOciUU-d0Hzf_pZF0RBnhU3D98W8f60Dv4JOUjvrYwcdBZzQyLZ750",
      {},
      {
        params: params,
      }
    );
    return this.http.request(req);
  }
  sharedVideoGoogleDrive(fileId) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    headers = headers.append("key", "AIzaSyDcOuyy2oc-evQPF3F-GPQOPsiHx_XUMl8");
    let req = new HttpRequest(
      "POST",
      "https://www.googleapis.com/drive/v2/files/" + fileId + "/permissions",
      JSON.stringify({ role: "reader", type: "anyone" }),
      {
        headers: headers,
      }
    );
    return this.http.request(req);
  }
  saveVideoNodeJs(file) {
    let request = new FormData();
    request.append("file", file);
    const req = new HttpRequest(
      "POST",
      "https://upload.myteam.ma/api/upload/frmf/add",
      request,
      {
        reportProgress: true,
        responseType: "json",
      }
    );
    return this.http.request(req);
  }
  deleteVideoNodeJs(url_file) {
    return this.http.post(
      "https://upload.myteam.ma/api/upload/frmf/delete/" + url_file,
      {}
    );
  }
}
