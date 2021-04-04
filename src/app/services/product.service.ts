import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  async getProducts(): Promise<Product[]> {
    return this.http.get<Product[]>('/api/products').toPromise();
  }

  async getProductWithId(id) {
    return this.http.get<Product>('/api/products/' + id).toPromise();
  }

  async filterProducts(query: string): Promise<Product[]> {
    return this.http.get<Product[]>('/api/products', {
      params: { search: query }
    }).toPromise();
  }

  async addProduct(product: Product) {
    return this.http.post<Product>('/api/products', product).toPromise();
  }
}
