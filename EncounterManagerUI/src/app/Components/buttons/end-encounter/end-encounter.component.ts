import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-end-encounter',
  templateUrl: './end-encounter.component.html',
  styleUrls: ['./end-encounter.component.css']
})
export class EndEncounterComponent {

  constructor() { }
  @Output() eventEmitter = new EventEmitter<string>();

  endEncounter() {
    this.eventEmitter.next();
  }

}
