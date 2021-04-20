import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  searchQuery: string;

  constructor(private productService: ProductService) { }

  async ngOnInit() {
    this.products = await this.productService.loadProducts();
  }

  async search() {
    this.products = await this.productService.filterProducts(this.searchQuery);
  }

}
