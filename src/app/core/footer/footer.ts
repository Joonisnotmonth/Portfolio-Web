import { Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared-imports';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [SHARED_IMPORTS],
  standalone: true,
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class FooterComponent {
  // Language
  languageService = inject(LanguageService);

  year = new Date().getFullYear();
}
