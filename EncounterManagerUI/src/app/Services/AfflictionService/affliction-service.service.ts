import { Injectable,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, of } from 'rxjs';
import { DeathSavingThrowModalComponent } from '../../Components/Modals/death-saving-throw-modal/death-saving-throw-modal.component';
import { CombatDataService } from '../CombatData/combat-data.service';
import { Entity } from '../../Models/Entity';
import { CombatEntitiesComponent } from '../../Components/components/combat-entities/combat-entities.component';
@Injectable({
  providedIn: 'root'
})
export class AfflictionServiceService {

  constructor(
    private dialog: MatDialog,
    private combatData: CombatDataService
  ) { }

  condition: string;
  saved: boolean;

  getCondition(): string{
    return this.condition;
  }

  setCondition(condition: string){
    this.condition = condition;
  }

  getSaved(): boolean{
    return this.saved;
  }

  setSaved(saved: boolean){
    this.saved = saved;
  }

  deathSavingThrows(currentEntity: Entity) {
    const dialogRef = this.dialog.open(DeathSavingThrowModalComponent, {
      width: '15rem',
      disableClose: true,
      data:{entity: currentEntity}
    });
    dialogRef.afterClosed().subscribe(result => {
      let entity: Entity;
      this.combatData.getEntities().getValue().forEach(element => {
        if(element.name === result.name){
          element = result;
          entity = result;
        }
      });
      if(result.deathSavingThrowFail === 3) {
        this.combatData.death(entity);
      }
    });
    return of();
  }
}
