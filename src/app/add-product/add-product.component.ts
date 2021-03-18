import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup = this.formBuilder.group({
    id: [''],
    title: [''],
    description: [''],
    price: [0],
    imgUrl: [ 'https://matchory.com/assets/corals/images/default_product_image.png' ],
    brand: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    const product = this.productForm.value;
    this.productService.addProduct(product);
    this.router.navigateByUrl('/');
  }

}
