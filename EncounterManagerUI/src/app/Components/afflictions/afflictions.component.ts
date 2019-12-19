import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Entity } from '../../Models/Entity';
import { AfflictionModalComponent } from '../affliction-modal/affliction-modal.component';
import { AfflictionServiceService } from '../../Services/AfflictionService/affliction-service.service';


@Component({
  selector: 'app-afflictions',
  templateUrl: './afflictions.component.html',
  styleUrls: ['./afflictions.component.css']
})
export class AfflictionsComponent {

  constructor(
    public dialog: MatDialog,
    private afflictionService: AfflictionServiceService,
    ){}

  afflicted = false;
  afflictedBy = new Array();

  checkAfflicted(currentEntity: Entity) {
    this.afflictedBy = new Array();
    currentEntity.condition.forEach((value: boolean, key: string) => {
      if (value) {
        this.afflicted = true;
        this.afflictedBy.push(key);
      }
    });
    if(!this.afflictedBy.length){
      this.afflicted = false;
    }
  }

  removeAffliction(currentEntity: Entity): Entity {
    if(this.afflicted){
      this.afflictedBy.forEach(element =>{
        this.afflictionService.setCondition(element);
        const dialogRef = this.dialog.open(AfflictionModalComponent, {
          width: '15rem',
          disableClose: true,
          data: {condition: element},
        });
        dialogRef.afterClosed().subscribe(result => {
          if (this.afflictionService.getSaved()) {
            currentEntity.condition.set(element, false)
          }
        });
      });
    }
    return currentEntity;
  }
}
