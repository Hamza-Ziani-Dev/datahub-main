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
