import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  imports: [],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class AdminComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'Admin',
      description: 'Admin dashboard — content management.',
      robots: 'noindex, nofollow',
    });
  }
}
