import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './Components/add-player/add-player.component';
import { AddCharacterModalComponent } from './Components/add-character-modal/add-character-modal.component';
import { PlanningComponent } from './Components/planning/planning.component';
import { CombatComponent } from './Components/combat/combat.component';
import { InitiativeModalComponent } from './Components/initiative-modal/initiative-modal.component';
import { InitiativeDataService } from './Services/InitiativeData/initiative-data.service';
import { TargetComponent } from './Components/target-modal/target.component';
import { CombatDataService } from './Services/CombatData/combat-data.service';
@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    AddCharacterModalComponent,
    PlanningComponent,
    CombatComponent,
    InitiativeModalComponent,
    TargetComponent
  ],
  entryComponents: [
    AddCharacterModalComponent,
    InitiativeModalComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [
    InitiativeDataService,
    CombatDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
