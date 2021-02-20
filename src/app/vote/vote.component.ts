import { Component, Input } from '@angular/core';
import { Person } from './person.type';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  @Input() question: string;
  @Input() people: Person[];
  agreed = 0;
  disagreed = 0;

  constructor() { }

  handleVote(agreed): void {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }

}
