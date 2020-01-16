import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CombatDataService } from '../../../Services/CombatData/combat-data.service';
import { Entity } from '../../../Models/Entity';
import { TargetComponent } from '../../Modals/target-modal/target.component';

@Component({
  selector: 'app-combat-entities',
  templateUrl: './combat-entities.component.html',
  styleUrls: ['./combat-entities.component.css']
})
export class CombatEntitiesComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private combatData: CombatDataService,
    ) { }

  entities: Entity[];
  currentEntity: Entity;
  target: Entity;

  ngOnInit() {
    this.combatData.getEntities().subscribe(entities => {
      this.entities = entities;
    });
    this.combatData.getTarget().subscribe(target => {
      this.target = target;
    });
    this.combatData.getCurrentEntity().subscribe(current =>{
      this.currentEntity = current;
    })
    this.target = null;
    if (this.entities) {
      this.currentEntity = this.entities.shift();
      this.combatData.setEntity(this.currentEntity);
    }
  }

  selectTarget(target: Entity) {
    this.combatData.setTarget(target);
    const dialogRef = this.dialog.open(TargetComponent, {
      width: '15rem',
      disableClose: true,
    });
  }

  death(entity: Entity) {
    this.combatData.death(entity);
  }

  nextTurn() {
    this.entities.push(this.currentEntity);
    this.combatData.setEntity(this.entities.shift());
    this.combatData.setEntities(this.entities);
    this.combatData.setTarget(null);
  }

}
