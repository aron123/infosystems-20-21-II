import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup = this.formBuilder.group({
    id: ['', [Validators.required, Validators.pattern(/^[0-9a-z]+$/)]],
    title: ['', Validators.required],
    description: [''],
    price: [0, Validators.max(1000)],
    imgUrl: [ 'https://matchory.com/assets/corals/images/default_product_image.png', Validators.pattern(/^(http|https):\/\/.*/) ],
    brand: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router) { }

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

  ngOnInit(): void {
  }

  addProduct() {
    const product = this.productForm.value;
    this.productService.addProduct(product);
    this.router.navigateByUrl('/');
  }

}
