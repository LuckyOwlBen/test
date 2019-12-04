import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './Components/player-list/player-list.component';
import { AddPlayerComponent } from './Components/add-player/add-player.component';
import { AddCharacterModalComponent } from './Components/add-character-modal/add-character-modal.component';
import { PlanningComponent } from './Components/planning/planning.component';
import { CombatComponent } from './Components/combat/combat.component';
import { RollInitiativeService } from './Services/roll-initiative.service';
import { InitiativeModalComponent } from './Components/initiative-modal/initiative-modal.component';
import { InitiativeDataService } from './Services/InitiativeData/initiative-data.service';
@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    AddPlayerComponent,
    AddCharacterModalComponent,
    PlanningComponent,
    CombatComponent,
    InitiativeModalComponent
  ],
  entryComponents: [
    AddCharacterModalComponent,
    InitiativeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [
    RollInitiativeService,
    InitiativeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
