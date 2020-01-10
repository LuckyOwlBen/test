import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TurnTrackerComponent } from '../../components/turn-tracker/turn-tracker.component';
import { AfflictionsComponent } from '../../components/afflictions/afflictions.component';
import { CombatEntitiesComponent } from '../../components/combat-entities/combat-entities.component';
import { CurrentTurnComponent } from '../../components/current-turn/current-turn.component';
import { CombatDataService } from '../../../Services/CombatData/combat-data.service';
import { DeathSavingThrowModalComponent } from '../../Modals/death-saving-throw-modal/death-saving-throw-modal.component';

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
    private dialog: MatDialog,
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
    if(this.currentTurn.currentEntity.condition.get("unconcious")) {
      if(!this.currentTurn.currentEntity.stable) {
        const dialogRef = this.dialog.open(DeathSavingThrowModalComponent, {
          width: '15rem',
          disableClose: true,
        });
        dialogRef.afterClosed().subscribe(result => {
          this.currentTurn.ngOnInit();
            if(this.currentTurn.currentEntity.deathSavingThrowFail === 3) {
              this.combatEntities.death(this.currentTurn.currentEntity);
            }
        });
      }
    }
  }
}
