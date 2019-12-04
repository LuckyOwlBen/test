import { Component, OnInit } from '@angular/core';
import { RollInitiativeService } from '../../Services/roll-initiative.service';
import { Entity } from '../../Models/Entity';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  entities: Entity[];

  constructor(
    public rollInitiativeService: RollInitiativeService
    ) { }

  ngOnInit() {
    this.entities = this.rollInitiativeService.getData();
  }

}
