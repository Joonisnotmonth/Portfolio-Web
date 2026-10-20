import { Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared-imports';
import { Lang, LanguageService } from '../../services/language.service';

@Component({
  imports: [SHARED_IMPORTS],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class HeaderComponent {
  constructor() {}
  lang = inject(LanguageService);

  setLang(l: Lang) {
    this.lang.setLang(l);
  }
}
