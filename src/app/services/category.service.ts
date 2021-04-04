import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  async getAllCategories() {
    return this.http.get<Category[]>('/api/categories').toPromise();
  }

  async createCategory(category: Category) {
    return this.http.post<Category>('/api/categories/', category).toPromise();
  }

  async deleteCategory(id) {
    return this.http.delete('/api/categories/' + id).toPromise();
  }
}
