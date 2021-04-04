import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;

  constructor(private router: Router) { }

  editProduct(id) {
    this.router.navigate(['/add-product'], {
      queryParams: { id }
    });
  }

}
