import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Entity } from '../../Models/Entity';
import { InitiativeDataService } from '../../Services/InitiativeData/initiative-data.service';
import { CombatDataService } from '../../Services/CombatData/combat-data.service';
import { TargetComponent } from '../target-modal/target.component';
import { TurnTrackerComponent } from '../turn-tracker/turn-tracker.component';
import { AfflictionsComponent } from '../afflictions/afflictions.component';


@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  @ViewChild(TurnTrackerComponent, {static: true})
  private turnTracker: TurnTrackerComponent;

  @ViewChild(AfflictionsComponent,{static:true})
  private afflictions: AfflictionsComponent;


  entities: Entity[];
  currentEntity: Entity;
  target: Entity;
  targetLocation: number;

  constructor(
    private initiativeDataService: InitiativeDataService,
    public dialog: MatDialog,
    private combatDataService: CombatDataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initiativeDataService.getData().subscribe(entity => {
      this.entities = entity;
    });
    this.target = null;
    if (this.entities) {
      this.currentEntity = this.entities.shift();
    }
  }

  entityTransfer(): void {
    this.initiativeDataService.setData(of(this.entities));
    this.router.navigate(['/planning']);
  }

  nextTurn() {
    this.afflictions.removeAffliction(this.currentEntity);
    this.entities.push(this.currentEntity);
    this.currentEntity = this.entities.shift();
    this.turnTracker.turnTracker(this.entities.length);
    this.afflictions.checkAfflicted(this.currentEntity);
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

  death(entity) {
    this.entities.splice(this.entities.indexOf(entity), 1);
  }
}
