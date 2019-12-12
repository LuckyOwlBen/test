import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RollInitiativeService } from '../../Services/roll-initiative.service';
import { Entity } from '../../Models/Entity';
import { Conditions } from '../../Models/Conditions';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  conditions: string [];
  entities: Entity[];
  currentEntity: Entity;
  target: Entity;
  targetLocation: number;
  turnCounter = 1;
  roundCounter = 1;

  constructor(
    private rollInitiativeService: RollInitiativeService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.entities = this.rollInitiativeService.getData();
    this.target = null;
    this.currentEntity = this.entities.shift();
  }

  entityTransfer(): void {
    this.rollInitiativeService.setData(this.entities);
    this.router.navigate(['/planning']);
  }

  nextTurn() {
    this.entities.push(this.currentEntity);
    this.currentEntity = this.entities.shift();
    this.conditions = Object.keys((this.currentEntity.condition));
    this.conditions.forEach(x => console.log(x));
    this.turnTracker();
    this.target = null;
  }

  selectTarget(target) {
    this.targetLocation = this.entities.indexOf(target);
    this.target = target;
  }

  turnTracker(): void {
    if (this.turnCounter <= this.entities.length ) {
      this.turnCounter++;
    } else {
      this.roundCounter++;
      this.turnCounter = 1;
    }
  }

  death(entity) {
    this.entities.splice(this.entities.indexOf(entity), 1);
  }


}
