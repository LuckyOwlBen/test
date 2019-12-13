import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CombatDataService } from '../../Services/CombatData/combat-data.service';
import { Entity } from '../../Models/Entity';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  constructor(
    private combatDataService: CombatDataService,
    public dialogRef: MatDialogRef<TargetComponent>,
  ) { }

  currentEntity: Entity;
  target: Entity;
  change: number;

  ngOnInit() {
    this.currentEntity = this.combatDataService.getCurrentEntity();
    this.target = this.combatDataService.getTarget();
  }

  damageTarget(damage) {
    this.target.currentHp -= damage;
  }

  healTarget(healing: number) {
    this.target.currentHp -= (-healing);
  }

  endActions() {
    this.combatDataService.setData(this.currentEntity, this.target);
    this.dialogRef.close();
  }

}
