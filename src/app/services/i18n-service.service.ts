import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nServiceService {
  private langs = {
    'en': 'en',
    'fr': 'fr',
    'esp': 'esp',
    'it': 'it',
    'ar': 'ar',
  };
  localeLang = 'fr';
  updatedLocaleLang = new Subject();
  constructor(private translate: TranslateService) { }
  getUpdatedLocaleLangListener() {
    return this.updatedLocaleLang.asObservable();
  }

  changeLocal(locale) {
    this.localeLang = this.langs[locale];
    this.translate.use(this.langs[locale]);
    this.updatedLocaleLang.next(this.langs[locale]);
  }
  getLocal() {
    this.updatedLocaleLang.next(this.langs[this.localeLang]);
  }
}
