import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer';
import { HeaderComponent } from './core/header/header';
import { LanguageService } from './services/language.service';

@Component({
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Portfolio-Web');

  constructor(private lang: LanguageService) {
    this.lang.init();
  }
}
