import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from './products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProducts[] = [];
  filter = {
    page: 1,
    q: '',
  };

  fetchProduct() {
    this.productService
      .getProducts(this.filter)
      .subscribe((product) => (this.products = product.data));
  }

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.fetchProduct();
  }

  onChangeSearch(q: string) {
    this.filter = {
      ...this.filter,
      q,
    };
  }

  onSearch() {
    this.fetchProduct();
  }
}
