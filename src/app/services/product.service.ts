import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  async loadProducts() {
    return this.http.get<Product[]>('/api/products').toPromise();
  }

  async filterProducts(search: string) {
    return this.http.get<Product[]>('/api/products', {
      params: { search }
    }).toPromise();
  }

  async addProduct(product: Product) {
    return this.http.post<Product>('/api/products', product).toPromise();
  }

  async getProductById(id: string) {
    return this.http.get<Product>('/api/products/' + id).toPromise();
  }
}
