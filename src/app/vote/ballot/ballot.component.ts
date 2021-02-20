import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../person.type';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent {

  @Input() person: Person;
  @Output() voted: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  vote(agreed: boolean): void {
    this.person.voted = true;
    this.voted.emit(agreed);
  }
}
