import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurnTrackerComponent } from '../../components/turn-tracker/turn-tracker.component';
import { AfflictionsComponent } from '../../components/afflictions/afflictions.component';
import { CombatEntitiesComponent } from '../../components/combat-entities/combat-entities.component';
import { CurrentTurnComponent } from '../../components/current-turn/current-turn.component';
import { CombatDataService } from '../../../Services/CombatData/combat-data.service';
import { AfflictionServiceService } from '../../../Services/AfflictionService/affliction-service.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent {

  @ViewChild(CombatEntitiesComponent,{static: true})
  private combatEntities: CombatEntitiesComponent;

  @ViewChild(TurnTrackerComponent, {static: true})
  private turnTracker: TurnTrackerComponent;

  @ViewChild(AfflictionsComponent,{static:true})
  private afflictions: AfflictionsComponent;

  @ViewChild(CurrentTurnComponent, {static: true})
  private currentTurn: CurrentTurnComponent;

  constructor(
    private router: Router,
    private combatService: CombatDataService,
    private afflictionService: AfflictionServiceService
  ) { }


  entityTransfer(): void {
    if(this.combatService.getEntities().getValue()[0] != null){
     this.combatService.getEntities().getValue().push(this.combatService.getCurrentEntity().getValue());
    }
    this.router.navigate(['/planning']);
  }

  nextTurn() {
    this.afflictions.removeAffliction(this.combatService.getCurrentEntity().getValue());
    this.combatEntities.nextTurn();
    this.turnTracker.turnTracker(this.combatService.getEntities().getValue().length);
    this.combatService.setEntity(this.afflictions.checkAfflicted(this.combatService.getCurrentEntity().getValue()));
    if(this.combatService.getCurrentEntity().getValue().condition.get("unconcious")) {
      let event = this.afflictionService.deathSavingThrows();
      if(event != null){
        this.combatEntities.death(this.combatService.getCurrentEntity().getValue());
      }
      console.log(this.combatService.getCurrentEntity().getValue().name + " is unconcious");
      //this.nextTurn();
    }
  }
}
