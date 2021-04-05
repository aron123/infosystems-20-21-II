import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { User } from '../models/user';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  isNewProduct: boolean = true;

  categories: Category[];

  users: User[];

  errorMessage: string;

  productForm: FormGroup = this.formBuilder.group({
    id: [0],
    title: ['', Validators.required],
    description: [''],
    price: [0, Validators.max(1000)],
    imgUrl: [ 'https://matchory.com/assets/corals/images/default_product_image.png', Validators.pattern(/^(http|https):\/\/.*/) ],
    brand: [''],
    uploader: [null],
    categories: [[]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  get id() {
    return this.productForm.get('id');
  }

  get title() {
    return this.productForm.get('title');
  }

  get price() {
    return this.productForm.get('price');
  }

  get imgUrl() {
    return this.productForm.get('imgUrl');
  }

  async ngOnInit() {
    this.categories = await this.categoryService.getAllCategories();
    this.users = await this.userService.getUsers();
    const productId = this.activatedRoute.snapshot.queryParams.id;

    if (productId) {
      this.isNewProduct = false;
      const product = await this.productService.getProductWithId(productId);
      this.productForm.setValue(product);
    }
  }

  async addProduct() {
    const product = this.productForm.value;
    try {
      this.errorMessage = '';
      await this.productService.addProduct(product);
      this.router.navigateByUrl('/');
    } catch (err) {
      this.errorMessage = err.error.message;
    }
  }

}
