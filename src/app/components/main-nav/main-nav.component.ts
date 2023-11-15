import { Component, ViewChildren, QueryList } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { authService } from 'src/app/components/auth/service/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { I18nServiceService } from 'src/app/services/i18n-service.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent {
  MENUS = [];
  version: string = "";
  envirement = 'pro';
  authStatus: boolean = false;
  authStatusSub: Subscription;
  user: User;
  @ViewChildren('drawer') dr: QueryList<MatSidenav>;
  userSub: Subscription;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches)
    );
  myHtml: SafeHtml;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private breakpointObserver: BreakpointObserver, private authService: authService, private translate: TranslateService, private i18nService: I18nServiceService, router: Router) {
    router.events.pipe(
      withLatestFrom(this.isHandset$),
      filter(([a, b]) => b && a instanceof NavigationStart)
    ).subscribe(_ => this.dr.first.close());
    this.envirement = environment.type;
  }

  ngOnInit() {
    this.authStatusSub = this.authService.getUpdatedAuthSTatus()
      .subscribe(
        (response: boolean) => {
          this.authStatus = response;
        }
      );
    this.authService.checkAuth();
    this.i18nService.getUpdatedLocaleLangListener().subscribe((locale: string) => {
      this.translate.use(locale);
    });
    this.userSub = this.authService.getUpdatedUser()
      .subscribe(
        (result: User) => {
          if (result != null) {
            this.authService.startTokenRefreshTimer();
            this.user = result;
            // console.log(this.user)
            this.version = this.user?.version;
            if (this.MENUS.length == 0)
              this.MENUS = [
                {
                  label: 'HEADER.HOME',
                  icon: 'fas fa-home',
                  display: true,
                  permission: !['hotel', 'RESPONSABLE-CENTRE', 'DTR-ADMINISTATEUR', 'DTR-CONTROLLER', 'SCOUTING-ADMINISTATEUR', 'SCOUTING-CONTROLLER'].includes(this.user?.role),
                  options: [],
                  routerLink: ['/'],
                },
                {
                  label: 'HEADER.CALENDAR',
                  icon: 'fas fa-calendar-day',
                  display: true,
                  permission: (this.user?.type == 'owner' || ['hotel', 'stage', 'team_manager', 'RESPONSABLE-CENTRE', 'FRMF'].includes(this.user?.role)) ||
                    (this.user?.hasOwnProperty('permissions') &&
                      (this.user?.permissions.includes('calendrier') || this.user?.permissions.includes('scouting'))),
                  options: [],
                  routerLink: ['calendrier'],
                },
                {
                  label: 'Calendrier DTN',
                  icon: 'fas fa-tasks',
                  display: true,
                  permission: (this.user?.type === 'owner' || this.user?.role === 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('calendrier-dtn')),
                  options: [],
                  routerLink: ['calendrier-dtn/calendrier']
                },
                {
                  label: 'HEADER.STAGES',
                  icon: 'fab fa-hubspot',
                  display: true,
                  permission: (this.user?.type === 'owner' || ['FRMF', 'team_manager', 'hotel', 'stage', 'RESPONSABLE-CENTRE'].includes(this.user?.role)) && this.user?.pack != 'pack_starter',
                  options: [],
                  routerLink: ['stages/list']
                },
                {
                  label: 'HEADER.DATA_EXPORT',
                  icon: 'fas fa-database',
                  display: true,
                  permission: (this.user?.type === 'owner' || ['sahid.dahbi@frmf.ma', 'roy.pieters@frmf.ma'].includes(this.user?.email)),
                  options: [],
                  routerLink: ['data-export/list']
                },
                {
                  label: 'DataHub',
                  icon: 'fas fa-chart-pie',
                  display: false,
                  permission: this.user?.type == 'owner' && this.user?.pack != 'pack_starter',
                  options: [
                    {
                      label: 'Ranking',
                      icon: 'fas fa-users',
                      permission: this.user?.type == 'owner',
                      routerLink: ['/datahub', 'ranking'],
                      options: []
                    },
                    {
                      label: 'Players',
                      icon: 'fas fa-street-view',
                      //permission: this.user?.type == 'owner',
                      permission: false,
                      routerLink: ['/datahub', 'players', 'profil'],
                      options: []
                    },
                  ]
                },
                {
                  label: 'Scouting',
                  icon: 'fas fa-binoculars',
                  display: false,
                  permission: (((this.user?.type == 'owner' || this.user?.role == 'FRMF') || ['scouting_men', 'scouting_ligue_men', 'scouting_women', 'scouting_ligue_women'].filter(permission => this.user?.permissions.includes(permission)).length > 0)) && this.user?.pack != 'pack_starter',
                  options: [
                    {
                      label: 'Men',
                      icon: 'fas fa-male',
                      display: false,
                      permission: ((this.user?.type == 'owner' || this.user?.role == 'FRMF') || ['scouting_men', 'scouting_ligue_men'].filter(permission => this.user?.permissions.includes(permission)).length > 0),
                      routerLink: [],
                      options: [
                        {
                          label: 'Général',
                          icon: 'fas fa-users',
                          permission: (this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') &&
                            this.user?.permissions.includes('scouting_men')),
                          routerLink: ['/scouting-m', 'men', 'A19L5vu8lguQ2']
                        },
                        {
                          label: 'Ligue',
                          icon: 'fas fa-users-cog',
                          permission: (this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') &&
                            this.user?.permissions.includes('scouting_ligue_men')),
                          routerLink: ['/scouting-ligue-m', 'men', 'CmRSQLlOC39V2']
                        },
                      ]
                    },
                    {
                      label: 'Women',
                      icon: 'fas fa-female',
                      display: false,
                      permission: ((this.user?.type == 'owner' || this.user?.role == 'FRMF') || ['scouting_women', 'scouting_ligue_women'].filter(permission => this.user?.permissions.includes(permission)).length > 0),
                      routerLink: [],
                      options: [
                        {
                          label: 'Général',
                          icon: 'fas fa-users',
                          permission: (this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') &&
                            this.user?.permissions.includes('scouting_women')),
                          routerLink: ['/scouting-w', 'women', 'A19L5vu8lguQ2']
                        },
                        {
                          label: 'Ligue',
                          icon: 'fas fa-users-cog',
                          permission: (this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') &&
                            this.user?.permissions.includes('scouting_ligue_women')),
                          routerLink: ['/scouting-ligue-w', 'women', 'CmRSQLlOC39V2']
                        },

                      ]
                    },
                  ]
                },

                {
                  label: 'Coffre Fort',
                  icon: 'fas fa-archive',
                  permission: (
                    (this.user?.type === 'owner' || this.user?.role === 'FRMF') ||
                    (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('coffre-fort'))
                  ),
                  display: true,
                  options: [],
                  routerLink: ['coffre-fort/list']
                },
                {
                  label: 'CTR Data',
                  icon: 'far fa-futbol',
                  display: true,
                  permission: this.user?.type === 'owner',
                  options: [],
                  routerLink: ['ctr-reporting/dashboard']
                },
                {
                  label: 'Prevention',
                  icon: 'fas fa-qrcode',
                  display: true,
                  permission: this.user?.type === 'owner',
                  options: [],
                  routerLink: ['prevention/list-prevention']
                },
                {
                  label: 'HEADER.EFFECTIVE',
                  icon: 'fas fa-shield-alt',
                  display: true,
                  permission: (((this.user?.type == 'owner' || this.user?.role == 'FRMF') ||
                    (this.user?.hasOwnProperty('permissions') &&
                      this.user?.permissions.includes('effectif'))) &&
                    !['DTR-ADMINISTATEUR', 'DTR-CONTROLLER'].includes(this.user?.role)),
                  options: [],
                  routerLink: ['effectif/myTeam']
                },
                {
                  label: 'HEADER.ATHLETE',
                  icon: 'fas fa-sort-amount-down',
                  display: true,
                  permission: (
                    (this.user?.type === 'owner' || this.user?.role === 'FRMF') ||
                    (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('athlete'))
                  ),
                  options: [],
                  routerLink: ['athlete/list-player']
                },
                {
                  label: 'Gestion Staff',
                  icon: 'fas fa-random',
                  display: true,
                  permission: (
                    this.user?.type === 'owner' ||
                    (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('staff'))
                  ),
                  options: [],
                  routerLink: ['staff/all']
                },
                {
                  label: 'Media Center',
                  icon: 'fas fa-play-circle',
                  display: true,
                  permission: (
                    this.user?.type === 'owner' ||
                    (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('media-center'))
                  ),
                  options: [],
                  routerLink: ['media-center']
                },
                {
                  label: 'HEADER.MAIL',
                  icon: 'fas fa-comments',
                  permission: (this.user?.access == 1 && ((this.user?.type === 'owner' || this.user?.role === 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('mail')))),
                  display: true,
                  options: [],
                  routerLink: ['mail/sendMail']
                },
                {
                  label: 'HEADER.MATCH',
                  icon: 'far fa-futbol',
                  permission: (this.user?.type === 'owner' || this.user?.role === 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('match')),
                  display: true,
                  options: [],
                  routerLink: ['match/calendar']
                },
                {
                  label: 'HEADER.ANALYSEVIDEO',
                  icon: 'fas fa-video',
                  permission: (this.user?.access == 1 && ((this.user?.type === 'owner' || this.user?.role === 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('matchs-events')))),
                  display: true,
                  options: [],
                  routerLink: ['matchs-events']
                },
                {
                  label: 'HEADER.TRAINING',
                  icon: 'fas fa-clipboard',
                  permission: (this.user?.type === 'owner' || this.user?.role === 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('entrainement')),
                  display: true,
                  options: [],
                  routerLink: ['entrainement/myTraining']
                },
                {
                  label: 'HEADER.EXERCISE_SHEET',
                  icon: 'fas fa-clipboard',
                  permission: (this.user?.access == 1 && ((this.user?.type === 'owner' || this.user?.role === 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('fichiers-exercice')))),
                  display: true,
                  options: [],
                  routerLink: ['exercise/all']
                },
                {
                  label: 'HEADER.STATS',
                  icon: 'fas fa-chart-bar',
                  permission: (this.user?.access == 1 && ((this.user?.type === 'owner' || this.user?.role === 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('stats')))) && this.user?.pack != 'pack_starter',
                  display: true,
                  options: [],
                  routerLink: ['stats']
                },
                {
                  label: 'HEADER.WORKLOAD',
                  icon: 'fas fa-chart-bar',
                  permission: (this.user?.access == 1 && ((this.user?.type === 'owner' || this.user?.role === 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('performance')))),
                  display: true,
                  options: [],
                  routerLink: ['performance']
                },
                {
                  label: 'HEADER.PHYSICAL',
                  icon: 'fas fa-running',
                  display: true,
                  permission: (
                    this.user?.access === 1 &&
                    ((this.user?.type === 'owner' || this.user?.role === 'FRMF') ||
                      (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('physique')))
                  ),
                  options: [],
                  routerLink: ['physique']
                },
                {
                  label: 'HEADER.MEDICAL',
                  icon: 'fas fa-file-medical-alt',
                  display: true,
                  permission: (
                    this.user?.access === 1 &&
                    ((this.user?.type === 'owner' || this.user?.role === 'FRMF') ||
                      (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('medical')))
                  ),
                  options: [],
                  routerLink: ['medical/stats']
                },
                {
                  label: 'HEADER.PARAMETRES',
                  icon: 'fas fa-cogs',
                  display: true,
                  permission: (
                    this.user?.access === 1 &&
                    (this.user?.type === 'owner' ||
                      (!this?.user.role.includes('FRMF') && this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('configuration-panel')))
                  ),
                  options: [],
                  routerLink: ['configuration-panel/injuries']
                },
                {
                  label: 'HEADER.ADMINISTRATIVE',
                  icon: 'fas fa-users-cog',
                  display: true,
                  permission: (
                    this.user?.access === 1 &&
                    (this.user?.type === 'owner' ||
                      (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('administration')))
                  ),
                  options: [],
                  routerLink: ['administration/listplayers']
                }
              ]

          } else {
            this.MENUS = []
          }
        }
      );
    this.authService.getUser();
  }
  onLogout() {
    this.authService.logout();
  }


}
export interface User {
  access: number
  adresse: string
  categorie: string
  club: string
  clubId: string
  clubType: number
  clubs: Array<String>
  email: string
  pack: string
  genre: string
  id: number
  logo: string
  nom: string
  permissions: Array<String>
  prenom: string
  role: string
  saisonId: number
  saisonYear: string
  sexe: string
  slug: string
  sub_id: number
  tel_fix: string
  tel_p: string
  version: string
  type: string
}
