import { Component, ElementRef, ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/services/i18n-service.service';
import { CharedService } from './services/chared.service';
import { authService } from './components/auth/service/auth.service';
import { environment } from 'src/environments/environment';
import { User } from './shared/interface/user.model';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  constructor(public charedService: CharedService, private authService: authService, private dateAdapter: DateAdapter<any>, private translate: TranslateService, private i18nService: I18nServiceService) {
    translate.setDefaultLang('fr');
  }
  ngOnInit() {
    this.authService.getUpdatedUser()
      .subscribe(
        (result: User) => {
          if (result?.id) {
            this.user = result;
            console.log(
              this.user?.type === 'sub_user', this.user?.autoriser == 0
            );
            this.authService.getPalettes(result?.id).subscribe(palette => {
              Object.keys(palette).forEach(key => {
                if (!environment.production) {
                  console.log(
                    `%cUSER ${result?.nom.toUpperCase().trim()}`,
                    `color: ${palette['--secondary-color'] ?? 'white'}; background-color: ${palette['--primary-color'] ?? '#5F87C1'}; padding: 3px 6px ; border-radius: 3px;`,
                    result
                  );
                }
                this.charedService.updatePlatformColor(key, palette[key])
              })
            })
          }
        }
      );
    this.authService.getUser();
    this.i18nService.getUpdatedLocaleLangListener().subscribe((locale: string) => {
      this.translate.use(locale);
    });
    this.i18nService.getLocal();
    this.dateAdapter.setLocale('fr-FR');
  }

  title = 'sidenav-with-multilevel-menu';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
