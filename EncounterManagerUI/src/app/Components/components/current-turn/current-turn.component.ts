import { Component, OnInit } from '@angular/core';
import { Entity } from '../../../Models/Entity';
import { CombatDataService } from '../../../Services/CombatData/combat-data.service';
@Component({
  selector: 'app-current-turn',
  templateUrl: './current-turn.component.html',
  styleUrls: ['./current-turn.component.css']
})
export class CurrentTurnComponent implements OnInit {

  constructor(private combatService: CombatDataService,) { }

  currentEntity: Entity;

  ngOnInit() {
    this.currentEntity = this.combatService.getCurrentEntity();
  }

}
