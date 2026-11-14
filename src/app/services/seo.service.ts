import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  robots?: string;
}

const SITE_NAME = 'Yada Kruekkhoksung — Portfolio';
const DEFAULT_DESCRIPTION =
  'Portfolio of Yada Kruekkhoksung — Frontend Developer focused on clean, fast, and accessible interfaces. React, Next.js, Angular, TypeScript.';
const DEFAULT_KEYWORDS =
  'Yada Kruekkhoksung, Frontend Developer, Portfolio, React, Next.js, Angular, TypeScript, Tailwind CSS, Web Developer';
const DEFAULT_OG_IMAGE = 'https://placehold.co/1200x630/171717/10b981?text=Yada+Kruekkhoksung';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly titleService = inject(Title);
  private readonly doc = inject(DOCUMENT);

  /**
   * Set all SEO-relevant meta tags and the page title for the current route.
   */
  update(config: SeoConfig): void {
    const fullTitle =
      config.title === SITE_NAME ? config.title : `${config.title} | ${SITE_NAME}`;

    // Page title
    this.titleService.setTitle(fullTitle);

    // Standard meta
    this.setTag('description', config.description);
    this.setTag('keywords', config.keywords ?? DEFAULT_KEYWORDS);
    this.setTag('robots', config.robots ?? 'index, follow');

    // Open Graph
    this.setProperty('og:title', fullTitle);
    this.setProperty('og:description', config.description);
    this.setProperty('og:type', config.ogType ?? 'website');
    this.setProperty('og:site_name', SITE_NAME);
    this.setProperty('og:image', config.ogImage ?? DEFAULT_OG_IMAGE);
    if (config.ogUrl) {
      this.setProperty('og:url', config.ogUrl);
    }

    // Twitter Card
    this.setTag('twitter:card', 'summary_large_image');
    this.setTag('twitter:title', fullTitle);
    this.setTag('twitter:description', config.description);
    this.setTag('twitter:image', config.ogImage ?? DEFAULT_OG_IMAGE);

    // Canonical link
    this.setCanonical(config.canonical);
  }

  /**
   * Convenience: reset to homepage defaults.
   */
  resetToDefaults(): void {
    this.update({
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
    });
  }

  // ── helpers ──────────────────────────────────────────────

  private setTag(name: string, content: string): void {
    const existing = this.meta.getTag(`name="${name}"`);
    if (existing) {
      this.meta.updateTag({ name, content });
    } else {
      this.meta.addTag({ name, content });
    }
  }

  private setProperty(property: string, content: string): void {
    const existing = this.meta.getTag(`property="${property}"`);
    if (existing) {
      this.meta.updateTag({ property, content });
    } else {
      this.meta.addTag({ property, content });
    }
  }

  private setCanonical(url?: string): void {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (url) {
      if (!link) {
        link = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);
      }
      link.setAttribute('href', url);
    } else if (link) {
      link.remove();
    }
  }
}
