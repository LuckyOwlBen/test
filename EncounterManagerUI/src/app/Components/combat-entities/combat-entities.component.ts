import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CombatDataService } from '../../Services/CombatData/combat-data.service';
import { Entity } from '../../Models/Entity';
import { InitiativeDataService } from '../../Services/InitiativeData/initiative-data.service';
import { TargetComponent } from '../target-modal/target.component';

@Component({
  selector: 'app-combat-entities',
  templateUrl: './combat-entities.component.html',
  styleUrls: ['./combat-entities.component.css']
})
export class CombatEntitiesComponent implements OnInit {

  constructor(
    private initiativeDataService: InitiativeDataService,
    public dialog: MatDialog,
    private combatDataService: CombatDataService,
    ) { }

  entities: Entity[];
  currentEntity: Entity;
  target: Entity;

  ngOnInit() {
    this.initiativeDataService.getData().subscribe(entity => {
      this.entities = entity;
    });
    this.target = null;
    if (this.entities) {
      this.currentEntity = this.entities.shift();
    }
    this.combatDataService.setEntity(this.currentEntity);
  }

  selectTarget(target) {
    this.target = target;
    this.combatDataService.setEntity(this.currentEntity);
    this.combatDataService.setTarget(this.target);
    const dialogRef = this.dialog.open(TargetComponent, {
      width: '15rem',
      disableClose: true,
    });
  }

  death(entity) {
    this.entities.splice(this.entities.indexOf(entity), 1);
  }

}
