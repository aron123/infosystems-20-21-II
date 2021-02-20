import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {

  @Output() majorIncremented: EventEmitter<any> = new EventEmitter();
  @Output() minorIncremented: EventEmitter<any> = new EventEmitter();
  @Output() patchIncremented: EventEmitter<any> = new EventEmitter();

  constructor() { }

  majorClicked(): void {
    this.majorIncremented.emit();
  }

  minorClicked(): void {
    this.minorIncremented.emit();
  }

  patchClicked(): void {
    this.patchIncremented.emit();
  }
}
