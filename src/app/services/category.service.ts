import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Category[]>('/api/categories').toPromise();
  }

  create(category: Category) {
    return this.http.post<Category>('/api/categories', category).toPromise();
  }

  delete(id: number) {
    return this.http.delete('/api/categories/' + id).toPromise();
  }
}
