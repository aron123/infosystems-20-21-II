import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infosystems';
  items = [ 'item1', 'item2', 'item3' ];
  objects = [
    { id: 1, title: 'title1', description: 'sdasd'},
    { id: 2, title: 'title2', description: 'asdasdsa' },
    { id: 3, title: 'title3', description: 'asdasdasdas' },
  ]
  showSecretText = false;

  removeLastItem () {
    this.items.pop();
  }

  removeFirstObject() {
    this.objects.shift();
  }

  toggleSecretText() {
    this.showSecretText = !this.showSecretText;
  }
}
