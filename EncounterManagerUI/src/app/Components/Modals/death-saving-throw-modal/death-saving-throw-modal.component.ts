import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CombatDataService } from '../../../Services/CombatData/combat-data.service';
import { Entity } from '../../../Models/Entity';
@Component({
  selector: 'app-death-saving-throw-modal',
  templateUrl: './death-saving-throw-modal.component.html',
  styleUrls: ['./death-saving-throw-modal.component.css']
})
export class DeathSavingThrowModalComponent implements OnInit {

  constructor(
    private combatData: CombatDataService,
    public dialogRef: MatDialogRef<DeathSavingThrowModalComponent>,
  ) { }

  currentEntity: Entity;

  ngOnInit() {
    this.combatData.getCurrentEntity().subscribe(entity => {
      this.currentEntity = entity;
    })
  }

  success() {
    this.currentEntity.deathSavingThrowSuccess ++;
    if(this.currentEntity.deathSavingThrowSuccess === 3){
      this.currentEntity.stable = true;
    }
    this.dialogRef.close()
  }

  failure() {
    this.currentEntity.deathSavingThrowFail++;
    this.dialogRef.close();
  }

}
