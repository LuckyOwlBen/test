import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TurnTrackerComponent } from '../turn-tracker/turn-tracker.component';
import { AfflictionsComponent } from '../afflictions/afflictions.component';
import { CombatEntitiesComponent } from '../combat-entities/combat-entities.component';
import { CurrentTurnComponent } from '../current-turn/current-turn.component';
import { CombatDataService } from '../../Services/CombatData/combat-data.service';


@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent {

  @ViewChild(TurnTrackerComponent, {static: true})
  private turnTracker: TurnTrackerComponent;

  @ViewChild(AfflictionsComponent,{static:true})
  private afflictions: AfflictionsComponent;

  @ViewChild(CombatEntitiesComponent,{static: true})
  private combatEntities: CombatEntitiesComponent;

  @ViewChild(CurrentTurnComponent, {static: true})
  private currentTurn: CurrentTurnComponent;

  constructor(
    private router: Router,
    private combatService: CombatDataService,
  ) { }

  entityTransfer(): void {
    this.router.navigate(['/planning']);
  }

  nextTurn() {
    this.afflictions.removeAffliction(this.combatEntities.currentEntity);
    this.combatEntities.entities.push(this.combatEntities.currentEntity);
    this.combatEntities.currentEntity = this.combatEntities.entities.shift();
    this.combatService.setEntity(this.combatEntities.currentEntity);
    this.currentTurn.currentEntity = this.combatService.getCurrentEntity();
    this.turnTracker.turnTracker(this.combatEntities.entities.length);
    this.combatEntities.currentEntity = this.afflictions.checkAfflicted(this.combatEntities.currentEntity);
    this.combatEntities.target = null;
  }
}
