import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './Components/components/add-player/add-player.component';
import { AddCharacterModalComponent } from './Components/Modals/add-character-modal/add-character-modal.component';
import { PlanningComponent } from './Components/views/planning/planning.component';
import { CombatComponent } from './Components/views/combat/combat.component';
import { InitiativeModalComponent } from './Components/Modals/initiative-modal/initiative-modal.component';
import { TargetComponent } from './Components/Modals/target-modal/target.component';
import { CombatDataService } from './Services/CombatData/combat-data.service';
import { MonsterSearch } from './Services/MonsterSearch/monster-search.service';
import { TurnTrackerComponent } from './Components/components/turn-tracker/turn-tracker.component';
import { AfflictionsComponent } from './Components/components/afflictions/afflictions.component';
import { AfflictionModalComponent } from './Components/Modals/affliction-modal/affliction-modal.component';
import { CombatEntitiesComponent } from './Components/components/combat-entities/combat-entities.component';
import { CurrentTurnComponent } from './Components/components/current-turn/current-turn.component';
import { DeathSavingThrowModalComponent } from './Components/Modals/death-saving-throw-modal/death-saving-throw-modal.component';
import { NextTurnButtonComponent } from './Components/buttons/next-turn-button/next-turn-button.component';
import { EndEncounterComponent } from './Components/buttons/end-encounter/end-encounter.component';
import { RollInitiativeButtonComponent } from './Components/buttons/roll-initiative-button/roll-initiative-button.component';
import { AddPlayerButtonComponent } from './Components/buttons/add-player-button/add-player-button.component';
import { SearchMonsterComponentComponent } from './Components/components/search-monster-component/search-monster-component.component';
@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    AddCharacterModalComponent,
    PlanningComponent,
    CombatComponent,
    InitiativeModalComponent,
    TargetComponent,
    TurnTrackerComponent,
    AfflictionsComponent,
    AfflictionModalComponent,
    CombatEntitiesComponent,
    CurrentTurnComponent,
    DeathSavingThrowModalComponent,
    NextTurnButtonComponent,
    EndEncounterComponent,
    RollInitiativeButtonComponent,
    AddPlayerButtonComponent,
    SearchMonsterComponentComponent
  ],
  entryComponents: [
    AddCharacterModalComponent,
    InitiativeModalComponent,
    TargetComponent,
    AfflictionModalComponent,
    DeathSavingThrowModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

  ],
  providers: [
    MonsterSearch,
    CombatDataService,
    TurnTrackerComponent,
    AfflictionsComponent,
    CombatEntitiesComponent,
    CurrentTurnComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
