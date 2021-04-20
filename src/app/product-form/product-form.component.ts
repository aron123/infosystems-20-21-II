import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { User } from '../models/user';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup = this.formBuilder.group({
    id: [],
    title: [''],
    description: [''],
    price: [0, Validators.min(1)],
    imgUrl: [ 'https://matchory.com/assets/corals/images/default_product_image.png', Validators.pattern(/^http/) ],
    brand: [''],
    uploader: [],
    categories: [[]]
  });

  users: User[];

  categories: Category[];

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  get id() {
    return this.productForm.get('id');
  }

  get price() {
    return this.productForm.get('price');
  }

  get imgUrl() {
    return this.productForm.get('imgUrl');
  }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
    this.categories = await this.categoryService.getAll();

    const id = this.activatedRoute.snapshot.queryParams.id;

    if (id) {
      const product = await this.productService.getProductById(id);
      this.productForm.setValue(product);
    }
  }

  addProduct() {
    const product = this.productForm.value;
    this.productService.addProduct(product);
    this.router.navigateByUrl('/');
  }

  compareUsers(user1: User, user2: User): boolean {
    return user1 && user2 && user1.id === user2.id;
  }

  compareCategories(category1: Category, category2: Category): boolean {
    return category1 && category2 && category1.id === category2.id;
  }

}
