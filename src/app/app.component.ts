import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infosystems';
  agreeCount = 0;
  disagreeCount = 0;
  people = [
    { name: 'Mr. IQ', voted: false },
    { name: 'Ms. Universe', voted: false },
    { name: 'Bombasto', voted: false }
  ];

  vote(index: number, agree: boolean) {
    this.people[index].voted = true;

    if (agree) {
      this.agreeCount++;
    } else {
      this.disagreeCount++;
    }
    
  }
}
