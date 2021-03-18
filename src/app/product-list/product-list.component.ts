import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  query: string;

  constructor(private productService: ProductService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.products = await this.productService.getProducts();
    } catch (err) {
      console.error(err);
    }
  }

  async search(query): Promise<void> {
    if (!query) {
      this.products = await this.productService.getProducts();
    } else {
      this.products = await this.productService.filterProducts(query);
    }
  }

}
