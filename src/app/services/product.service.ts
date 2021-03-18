import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  storage: Product[] = [];

  constructor(public http: HttpClient) { }

  async loadStorageIfEmpty(): Promise<void> {
    if (!this.storage || this.storage.length === 0) {
      this.storage = await this.http.get<Product[]>('assets/products.json').toPromise();
    }
  }

  async getProducts(): Promise<Product[]> {
    await this.loadStorageIfEmpty();
    return Promise.resolve(this.storage);
  }

  async filterProducts(query): Promise<Product[]> {
    await this.loadStorageIfEmpty();

    const result = this.storage.filter(product => {
      if (!product.title) {
        return false;
      }

      return product.title.includes(query);
    });

    return Promise.resolve(result);
  }

  async addProduct(product: Product) {
    await this.loadStorageIfEmpty();
    this.storage.unshift(product);
  }
}
