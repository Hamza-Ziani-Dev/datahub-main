import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { authService } from 'src/app/components/auth/service/auth.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { I18nServiceService } from 'src/app/services/i18n-service.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CharedService } from '../../services/chared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user;
  userSub: Subscription;
  unseenSub: Subscription;
  equipes: any[] = [];
  unseenFiches = [];
  authStatus: boolean = false;
  authStatusSub: Subscription;
  loading = [false, true, true];
  localeLang;
  constructor(public charedService: CharedService, private authService: authService, private router: Router, private i18nService: I18nServiceService, private translate: TranslateService) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading[0] = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading[0] = false;
          if (this.user && this.user?.type != "owner" && localStorage.getItem(environment.ID_TOKEN)) {
          }
          break;
        }
        default: {
          break;
        }
      }
    });
    this.authStatusSub = this.authService.getUpdatedAuthSTatus()
      .subscribe(
        (response: boolean) => {
          this.authStatus = response;
        }
      );
    this.authService.checkAuth();
    this.i18nService.getUpdatedLocaleLangListener().subscribe((locale: string) => {
      this.translate.use(locale);
      this.localeLang = locale;
    });
    this.i18nService.getLocal();
    this.userSub = this.authService.getUpdatedUser()
      .subscribe(
        result => {
          this.user = result;
          if (!['DTR-ADMINISTATEUR', 'RESPONSABLE-CENTRE', 'DTR-CONTROLLER', 'SCOUTING-ADMINISTATEUR', 'SCOUTING-CONTROLLER'].includes(this.user?.role) && !["", null, undefined].includes(this.user?.clubs) || this.user?.type == "owner") {
            this.authService.geListEquipes().subscribe(
              (equipes: any[]) => {
                this.equipes = equipes;
                this.loading[2] = false;
              },
              (err: HttpErrorResponse) => {
                this.loading[2] = false;
              }
            )
          } else {
            this.loading[2] = false;
          }
        }
      );
    this.authService.getUser();

  }
  onChangeLocale() {
    this.i18nService.changeLocal(this.localeLang);
  }
  onLogout() {
    this.authService.logout();
  }
  selected(id: number) {
    this.authService.changeClub(id, 1);
  }


}
