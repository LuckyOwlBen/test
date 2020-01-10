import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-next-turn-button',
  templateUrl: './next-turn-button.component.html',
  styleUrls: ['./next-turn-button.component.css']
})
export class NextTurnButtonComponent {

  constructor() { }
  @Output() eventEmitter = new EventEmitter<string>();

  nextTurn() {
    this.eventEmitter.next();
  }

}
