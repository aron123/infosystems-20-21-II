import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  getProducts(): Promise<Product[]> {
    return this.http.get<Product[]>('assets/products.json').toPromise();
  }

  async filterProducts(query): Promise<Product[]> {
    const products = await this.getProducts();
    return Promise.resolve(products.filter(product => {
      if (!product.title) {
        return false;
      }

      return product.title.includes(query);
    }));
  }
}
