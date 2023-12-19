import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, INavbarData } from './helper';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authService } from 'src/app/components/auth/service/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/services/i18n-service.service';
import { User } from 'src/app/shared/interface/user.model';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  MENUS = [];
  version: string = "";
  envirement = 'pro';
  authStatus: boolean = false;
  authStatusSub: Subscription;
  user: User;
  userSub: Subscription;
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData = [];
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  constructor(
    private authService: authService,
    private translate: TranslateService,
    private i18nService: I18nServiceService,
    public router: Router) {
    this.envirement = environment.type;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
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
              this.navData = [
                {
                  label: 'HEADER.DATA_HUB',
                  icon: 'fas fa-chart-pie',
                  display: false,
                  // permission: this.user?.type == 'owner' && this.user?.pack != 'pack_starter',
                  permission: true,
                  items: [
                  
                    {
                      label: 'HEADER.PLAYERS',
                      icon: 'fas fa-street-view',
                      // permission: this.user?.type == 'owner',
                      // permission: true,
                      routerLink: '/datahub/players',
                      items: []
                    },
                   
                    {
                      label: 'Base de données',
                      icon: 'fas fa-users',
                      // permission: this.user?.type == 'owner',
                      permission: true,
                      routerLink: '/datahub/database/list-players-post',
                      items: []
                    },
                    {
                      label: 'Botola data hub',
                      icon: 'fas fa-users',
                      // permission: this.user?.type == 'owner',
                      permission: true,
                      routerLink: '/datahub/ranking',
                      items: []
                    },
                    {
                      label: 'HEADER.TEAMS',
                      icon: 'fas fa-users-cog',
                      // permission: this.user?.type == 'owner',
                      permission: true,
                      routerLink: '/datahub/teams',
                      items: []
                    }
                  ]
                },
                {
                  label: 'HEADER.CONPE_TITIONS',
                  icon: 'fas fa-trophy',
                  display: false,
                  // permission: this.user?.type == 'owner' && this.user?.pack != 'pack_starter',
                  permission: true,
                  items: [
                    {
                      label: 'HEADER.CLASSEMENT',
                      icon: 'fas fa-sort-numeric-up',
                      // permission: this.user?.type == 'owner',
                      permission: true,
                      routerLink: '/competitions/classement',
                      items: []
                    },
                    {
                      label: 'HEADER.RESULTATS',
                      icon: 'fas fa-star',
                      // permission: this.user?.type == 'owner',
                      permission: true,
                      routerLink: '/competitions/resultats',
                      items: []
                    },
                  ]
                },

              ]

          } else {
            this.MENUS = []
          }
        }
      );
    this.authService.getUser();
  }
  onLogout(): void {
    this.authService.logout();
  }
  toggleCollapse(): void {
    this.collapsed = true;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  getActiveClass(data: INavbarData): string {
    return data.routerLink?.includes(this.router.url) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}


