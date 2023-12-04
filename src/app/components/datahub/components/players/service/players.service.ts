import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class PlayersService {
  link: string = 'http://localhost:3000';
  //link: string = environment.link;
  API: string = environment.API2;
  endpoint = "players-hub";
  constructor(private http: HttpClient) { }

  getId(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.link}/${this.API}/${this.endpoint}/player/${id}`
    );
  }
  getProfilPlayer(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.link}/${this.API}/${this.endpoint}/profile/${id}`
    );
  }
  getSimiliarPlayers(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.link}/${this.API}/${this.endpoint}/similar/${id}`
    );
  }
  getComparisonPlayer(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.link}/${this.API}/${this.endpoint}/comparaison/${id}`
    );
  }
}
