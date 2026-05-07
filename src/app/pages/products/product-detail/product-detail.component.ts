import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productKey = params.get('product');

      this.http.get<any[]>('assets/data/product-details.json').subscribe({
        next: (data) => {
          const found = data.find((p) => p.id === productKey);
          this.product = found ?? data[0];
        },
        error: (err) => console.error('Failed to load product-details.json', err),
      });
    });
  }

  openWebsite(): void {
    if (this.product?.websiteUrl) {
      window.open(this.product.websiteUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
