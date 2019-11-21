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

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    AddPlayerComponent,
    AddCharacterModalComponent,
    PlanningComponent,
    CombatComponent
  ],
  entryComponents: [
    AddCharacterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
