import { Component } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Product } from './products.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaginatorIntlService } from '../../services/paginator-intl.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatPaginatorModule, CommonModule, MatIconModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }],
})
export class ProductsComponent {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  currentPage = 0;
  pageSize = 10;

  products: Product[] = [
    {
      image: '/images/news/blog/ui-ux-img.png',
      name: 'ERP & Business Software',
      subject: 'ezBiz: Fully Fledged ERP Solution for SMEs',
      link: '1',
      content: 'A comprehensive, cloud-based ERP platform combining Sales, Purchasing, Inventory, Accounting, CRM, and POS — purpose-built for small and medium enterprises.',
      category: 'Enterprise Software',
    },
    {
      image: '/images/news/blog/erp.jpeg',
      name: 'Mobile ERP',
      subject: 'ezBiz Lite: Mobile ERP for Micro and Small Businesses',
      link: '2',
      content: 'A fully fledged mobile ERP solution designed for micro and small enterprises, putting the power of business management in the palm of your hand.',
      category: 'Mobile Solution',
    },
    {
      image: '/images/news/blog/digitalimg.jpg',
      name: 'E-Learning Platform',
      subject: 'LeapX: Corporate Training & Education Platform',
      link: '3',
      content: 'A next-generation e-learning solution redefining corporate training — adaptive, collaborative, and built for the modern digital workforce.',
      category: 'EdTech',
    },
    {
      image: '/images/news/blog/seo_pic.jpg',
      name: 'Online Learning',
      subject: 'Guru.lk: Digital Education Platform',
      link: '4',
      content: 'Guru.lk makes learning accessible and convenient for everyone, anytime, anywhere — with any internet package, on any device.',
      category: 'EdTech',
    },
    {
      image: '/images/news/blog/sl_cricket.png',
      name: 'Sports Technology',
      subject: 'SLC Ticketing: End-to-End Online Ticketing Platform',
      link: '5',
      content: 'A state-of-the-art digital ticketing system transforming the matchday experience for Sri Lanka Cricket fans — secure, seamless, and scalable.',
      category: 'Sports Tech',
    },
  ];

  paginatedProducts = this.products.slice(0, this.pageSize);

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }
}
