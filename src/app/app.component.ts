import { Component } from '@angular/core';
import { AMAZON_DATASET } from 'src/assets/products';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = AMAZON_DATASET;
}
