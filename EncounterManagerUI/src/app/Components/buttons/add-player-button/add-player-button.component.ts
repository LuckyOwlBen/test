import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-player-button',
  templateUrl: './add-player-button.component.html',
  styleUrls: ['./add-player-button.component.css']
})
export class AddPlayerButtonComponent {

  constructor() { }
  @Output() eventEmitter = new EventEmitter<string>();

  addPlayer() {
    this.eventEmitter.next();
  }

}
