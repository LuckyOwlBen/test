import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Observable, of } from 'rxjs';
import { InitiativeDataService } from '../../Services/InitiativeData/initiative-data.service';
import { Entity } from '../../Models/Entity';
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
    private initiativeDataService: InitiativeDataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initiativeDataService.getData().subscribe(entity => {
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
        if (n1.initiativeTotal < n2.initiativeTotal) {
          return 1;
        }
        if ( n1.initiativeTotal > n2.initiativeTotal ) {
          return -1;
        }

        return 0;
      });
      this.initiativeDataService.setData(of(this.entities));
      this.onNoClick();
    }
  }
}
