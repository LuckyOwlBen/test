import { Component } from '@angular/core';

@Component({
  selector: 'app-turn-tracker',
  templateUrl: './turn-tracker.component.html',
  styleUrls: ['./turn-tracker.component.css']
})

export class TurnTrackerComponent {

  constructor() { }

  turnCounter = 1;
  roundCounter = 1;

  turnTracker(length: number): void {
    if (this.turnCounter <= length) {
      this.turnCounter++;
    } else {
      this.roundCounter++;
      this.turnCounter = 1;
    }
  }
}
