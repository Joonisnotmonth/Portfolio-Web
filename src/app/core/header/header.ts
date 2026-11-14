import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
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

  private host = inject(ElementRef<HTMLElement>);

  lang = inject(LanguageService);
  menuOpen = signal(false);

  setLang(l: Lang) {
    this.lang.setLang(l);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  // กดนอก header = ปิดเมนู
  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    if (!this.host.nativeElement.contains(e.target)) this.closeMenu();
  }
}
