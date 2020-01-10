import { Component, EventEmitter, Output } from '@angular/core';
import { PlanningComponent } from '../../views/planning/planning.component';

@Component({
  selector: 'app-roll-initiative-button',
  templateUrl: './roll-initiative-button.component.html',
  styleUrls: ['./roll-initiative-button.component.css']
})
export class RollInitiativeButtonComponent {

  constructor( public planning: PlanningComponent ) { }
  @Output() eventEmitter = new EventEmitter<string>();

  rollInitiative(){
    console.log("event emittted boss");
    this.eventEmitter.next();
  }

}
