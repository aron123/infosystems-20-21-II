import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  categories: Category[];

  newCategory: string;

  constructor(private categoryService: CategoryService) { }

  async ngOnInit() {
    this.categories = await this.categoryService.getAllCategories();
  }

  async createCategory() {
    const category: Category = {
      id: 0,
      title: this.newCategory
    };
    const added = await this.categoryService.createCategory(category);
    this.categories.push(added);
  }

  async deleteCategory(id: number) {
    await this.categoryService.deleteCategory(id);
    this.categories = await this.categoryService.getAllCategories();
  }

}
