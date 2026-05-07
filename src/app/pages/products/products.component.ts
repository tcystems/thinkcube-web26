import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PaginatorIntlService } from '../../services/paginator-intl.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatPaginatorModule, CommonModule, MatIconModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }],
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  currentPage = 0;
  pageSize = 10;

  products: any[] = [];
  paginatedProducts: any[] = [];

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/products.json').subscribe({
      next: (data) => {
        this.products = data;
        this.paginatedProducts = this.products.slice(0, this.pageSize);
      },
      error: (err) => console.error('Failed to load products.json', err),
    });
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }
}
