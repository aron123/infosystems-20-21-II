import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: Product[];
  query: string;

  constructor(private productService: ProductService) { }

  async ngOnInit() {
    try {
      await this.productService.initializeStorage();
      this.products = this.productService.getProducts();
    } catch (err) {
      console.error(err);
    }
  }

  search(query) {
    if (!query) {
      this.products = this.productService.getProducts();
    } else {
      this.products = this.productService.filterProducts(query);
    }
  }
}
