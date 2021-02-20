import { Component } from '@angular/core';
import { Person } from './vote/person.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  question = 'Should mankind colonize the Universe?';
  people: Person[] = [
    { name: 'Mr. IQ', voted: false },
    { name: 'Ms. Universe', voted: false },
    { name: 'Bombasto', voted: false }
  ];
}
