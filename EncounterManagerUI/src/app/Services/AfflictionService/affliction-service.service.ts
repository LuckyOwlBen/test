import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeathSavingThrowModalComponent } from '../../Components/Modals/death-saving-throw-modal/death-saving-throw-modal.component';
import { CombatDataService } from '../CombatData/combat-data.service';
import { EventEmitter } from 'events';

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

  deathSavingThrows(): EventEmitter {
    if(!this.combatData.getCurrentEntity().getValue().stable) {
      const dialogRef = this.dialog.open(DeathSavingThrowModalComponent, {
        width: '15rem',
        disableClose: true,
      });
      dialogRef.afterClosed().subscribe(result => {
          if(this.combatData.getCurrentEntity().getValue().deathSavingThrowFail === 3) {
            return EventEmitter;
          }
      });
      return null;
    }
  }

}
