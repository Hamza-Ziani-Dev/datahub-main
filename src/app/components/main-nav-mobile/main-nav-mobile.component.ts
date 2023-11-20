import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from '../../services/i18n-service.service';
import { User } from '../main-nav/main-nav.component';
import { CharedService, Links } from '../../services/chared.service';
import { HttpErrorResponse } from '@angular/common/http';
import { authService } from '../auth/service/auth.service';

@Component({
  selector: 'app-main-nav-mobile',
  templateUrl: './main-nav-mobile.component.html',
  styleUrls: ['./main-nav-mobile.component.css']
})
export class MainNavMobileComponent implements OnInit {
  authStatus: boolean = true;
  authStatusSub: Subscription;
  user: User;
  equipes: any[] = [];
  linksButtom: Links[] = [];
  linkSlidnav: Links[] = [];
  userSub: Subscription;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  loading = false;
  constructor(public charedService: CharedService, private router: Router, private breakpointObserver: BreakpointObserver, private authService$: authService, private translate: TranslateService, private i18nService: I18nServiceService) {

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }


  ngOnInit() {
    this.authStatusSub = this.authService$.getUpdatedAuthSTatus()
      .subscribe(
        response => {
          this.authStatus = response;
        }
      );
    this.authService$.checkAuth();
    this.i18nService.getUpdatedLocaleLangListener().subscribe((locale: string) => {
      this.translate.use(locale);
    });
    this.userSub = this.authService$.getUpdatedUser()
      .subscribe(
        (result: User) => {
          if (result != null) {
            this.user = result;
            if (!['DTR-ADMINISTATEUR', 'DTR-CONTROLLER', 'SCOUTING-ADMINISTATEUR', 'SCOUTING-CONTROLLER'].includes(this.user?.role) && ![null, undefined].includes(this.user?.clubs) || this.user?.type == "owner") this.authService$.geListEquipes().subscribe(
              (equipes: any[]) => {
                this.equipes = equipes;
              },
              (err: HttpErrorResponse) => {
              }
            )
            if (this.user?.type == 'owner') {
              this.linkSlidnav = this.charedService.getLinks().slice(4);
              this.linksButtom = this.charedService.getLinks().slice(0, 4);
            } else {
              let links = this.charedService.getLinks().sort((a, b) => {
                return this.user?.permissions.includes(a.key) ? -1 : 1;
              }).filter(link => this.isRoteValid(link.key))

              this.linkSlidnav = links.slice(4);
              this.linksButtom = links.slice(0, 4);
            }
          }
        }
      );
    this.authService$.getUser();
  }
  logout() {
    this.authService$.logout();
  }
  isRoteValid(role: string): boolean {
    if (this.user != undefined) {
      switch (role) {
        case 'home':
          return !['hotel', 'RESPONSABLE-CENTRE', 'DTR-ADMINISTATEUR', 'DTR-CONTROLLER', 'SCOUTING-ADMINISTATEUR', 'SCOUTING-CONTROLLER'].includes(this.user?.role);
        case 'controlle-panel':
          return this.user?.access == 1 && this.user?.role == 'CONTROLLER';
        case 'calendrier':
          return (this.user?.type == 'owner' || ['hotel', 'stage', 'team_manager', 'RESPONSABLE-CENTRE', 'FRMF'].includes(this.user?.role)) ||
            (this.user?.hasOwnProperty('permissions') &&
              (this.user?.permissions.includes('calendrier') || this.user?.permissions.includes('scouting')));
        case 'hubspot':
          return (this.user?.type === 'owner' || ['FRMF', 'team_manager', 'hotel', 'stage', 'RESPONSABLE-CENTRE'].includes(this.user?.role));
        case 'data-export':
          return (this.user?.type === 'owner' || ['sahid.dahbi@frmf.ma', 'roy.pieters@frmf.ma'].includes(this.user?.email));
        case 'scouting-m':
          return (this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') &&
            this.user?.permissions.includes('scouting_men'));
        case 'scouting-w':
          return (this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') &&
            this.user?.permissions.includes('scouting_women'));
        case 'ligue-m':
          return (this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') &&
            this.user?.permissions.includes('scouting_ligue_men'));
        case 'ligue-w':
          return (this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') &&
            this.user?.permissions.includes('scouting_ligue_women'));
        case 'calendrier-dtn':
          return (this.user?.type === 'owner' || this.user?.role === 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('calendrier-dtn'));
        case 'coffre-fort':
          return (
            (this.user?.type === 'owner' || this.user?.role === 'FRMF') ||
            (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('coffre-fort'))
          );
        case 'databub':
          return this.user?.type === 'owner';
        case 'ctr':
          return this.user?.type === 'owner';
        case 'prevention':
          return this.user?.type === 'owner';
        case 'effectif':
          return (((this.user?.type == 'owner' || this.user?.role == 'FRMF') ||
            (this.user?.hasOwnProperty('permissions') &&
              this.user?.permissions.includes('effectif'))) &&
            !['DTR-ADMINISTATEUR', 'DTR-CONTROLLER'].includes(this.user?.role));
        case 'athlete':
          return (
            (this.user?.type === 'owner' || this.user?.role === 'FRMF') ||
            (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('athlete'))
          );
        case 'staff':
          return (
            this.user?.type === 'owner' ||
            (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('staff'))
          );
        case 'media-center':
          return (
            this.user?.type === 'owner' ||
            (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('media-center'))
          );
        case 'mail':
          return (this.user?.access == 1 && ((this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('mail'))));
        case 'match':
          return (this.user?.type == 'owner' || this.user?.role == 'FRMF') ||
            (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('match'));
        case 'matchs-events':
          return (this.user?.access == 1 && ((this.user?.type == 'owner' || this.user?.role == 'FRMF') ||
            (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('matchs-events'))));
        case 'entrainement':
          return (this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('matchs-events'));
        case 'fichiers-exercice':
          return (this.user?.access == 1 && ((this.user?.type === 'owner' || this.user?.role === 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('fichiers-exercice'))));
        case 'stats':
          return (this.user?.access == 1 && ((this.user?.type == 'owner' || this.user?.role == 'FRMF') ||
            (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('stats'))));
        case 'performance':
          return (this.user?.access == 1 && ((this.user?.type == 'owner' || this.user?.role == 'FRMF') ||
            (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('performance'))));
        case 'physique':
          return (this.user?.access == 1 &&
            ((this.user?.type == 'owner' || this.user?.role == 'FRMF') || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('physique'))));
        case 'medical':
          return (this.user?.access == 1 && ((this.user?.type == 'owner' || this.user?.role == 'FRMF') ||
            (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('medical'))));
        case 'configuration-panel':
          return (this.user?.access == 1 && (this.user?.type == 'owner' || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('configuration-panel'))));
        case 'administration':
          return (this.user?.access == 1 && (this.user?.type == 'owner' || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('administration'))));
        // case 'vie-centre':
        //   return (this.user?.access == 1 && (this.user?.type == 'owner' || (this.user?.hasOwnProperty('permissions') && this.user?.permissions.includes('vie-centre'))));


        default:
          return false;
      }
    } else {
      return false;
    }


  }
  selected(id: number) {
    this.authService$.changeClub(id, 1);
  }
  navigateToMyaccount() {

    this.router.navigateByUrl('/myaccount/dashboard');

  }
}
