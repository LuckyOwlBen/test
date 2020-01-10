import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Observable, of } from 'rxjs';
import { CombatDataService } from '../../../Services/CombatData/combat-data.service';
import { Entity } from '../../../Models/Entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initiative-modal',
  templateUrl: './initiative-modal.component.html',
  styleUrls: ['./initiative-modal.component.css']
})
export class InitiativeModalComponent implements OnInit {

  entities: Entity[];
  selectedEntity: Entity;
  iterator = 0;

  constructor(
    public dialogRef: MatDialogRef<InitiativeModalComponent>,
    private combatData: CombatDataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.combatData.getEntities().subscribe(entity => {
      this.entities = entity;
    });
    this.selectedEntity = this.entities[this.iterator];
  }

  onNoClick() {
    this.dialogRef.close();
  }

  iterateArray(): void {
    if ( this.iterator < this.entities.length - 1 ) {
      this.iterator++;
      this.selectedEntity = this.entities[this.iterator];
    } else {
      this.entities = this.entities.sort( (n1, n2) => {
        return  n2.initiativeTotal - n1.initiativeTotal;
      });
      this.combatData.setEntities(this.entities);
      this.onNoClick();
    }
  }
}
