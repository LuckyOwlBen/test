import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entity } from '../../Models/Entity';
import { InitiativeDataService } from '../../Services/InitiativeData/initiative-data.service';
import { CombatDataService } from '../../Services/CombatData/combat-data.service';
import { TargetComponent } from '../target-modal/target.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  afflicted = false;
  afflictedBy = new Array();
  entities: Entity[];
  currentEntity: Entity;
  target: Entity;
  targetLocation: number;
  turnCounter = 1;
  roundCounter = 1;

  constructor(
    private initiativeDataService: InitiativeDataService,
    public dialog: MatDialog,
    private combatDataService: CombatDataService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.entities = this.initiativeDataService.getData();
    this.target = null;
    this.currentEntity = this.entities.shift();
  }

  entityTransfer(): void {
    this.initiativeDataService.setData(this.entities);
    this.router.navigate(['/planning']);
  }

  nextTurn() {
    this.entities.push(this.currentEntity);
    this.currentEntity = this.entities.shift();
    this.turnTracker();
    this.checkAfflicted();
    this.target = null;
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

  checkAfflicted() {
    this.afflictedBy = new Array();
    this.currentEntity.condition.forEach((value: boolean, key: string) => {
      if (value) {
        this.afflicted = true;
        this.afflictedBy.push(key);
      }
    });
  }
}
