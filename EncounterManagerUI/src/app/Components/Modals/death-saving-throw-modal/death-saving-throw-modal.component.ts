import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CombatDataService } from '../../../Services/CombatData/combat-data.service';
import { DialogData } from '../../../Interfaces/DialogData';
@Component({
  selector: 'app-death-saving-throw-modal',
  templateUrl: './death-saving-throw-modal.component.html',
  styleUrls: ['./death-saving-throw-modal.component.css']
})
export class DeathSavingThrowModalComponent {

  constructor(
    private combatData: CombatDataService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<DeathSavingThrowModalComponent>,
  ) { }

  success() {
    this.data.entity.deathSavingThrowSuccess ++;
    if(this.data.entity.deathSavingThrowSuccess === 3){
      this.data.entity.stable = true;
    }
    this.dialogRef.close(this.data.entity)
  }

  failure() {
    this.data.entity.deathSavingThrowFail++;
    this.dialogRef.close(this.data.entity);
  }

}
