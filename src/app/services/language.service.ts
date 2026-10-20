import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'th' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  currentLang = signal<Lang>('th');

  init() {
    this.translate.addLangs(['th', 'en']);
    this.translate.setFallbackLang('en'); // เวอร์ชันเก่าใช้ setDefaultLang('en')

    let saved: Lang = 'th';
    if (this.isBrowser) {
      const stored = localStorage.getItem('lang');
      if (stored === 'th' || stored === 'en') {
        saved = stored;
      }
    }
    this.setLang(saved);
  }

  setLang(lang: Lang) {
    this.translate.use(lang);
    this.currentLang.set(lang);

    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
    }
  }
}
