import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  storage: Product[] = [];

  constructor(public http: HttpClient) { }

  async initializeStorage(): Promise<any> {
    this.storage = await this.http.get<Product[]>('assets/products.json').toPromise();
  }

  getProducts(): Product[] {
    return this.storage;
  }

  filterProducts(query): Product[] {
    return this.storage.filter(product => {
      if (!product.title) {
        return false;
      }

      return product.title.includes(query);
    });
  }
}
