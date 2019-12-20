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

  checkAfflicted(currentEntity: Entity): Entity {
    this.afflictedBy = new Array();
    currentEntity.condition.forEach((value: boolean, key: string) => {
      if (value) {
        this.afflicted = true;
        this.afflictedBy.push(key);
        if(key === 'blinded' || key === 'poisoned' || key === 'prone') {
          currentEntity.disadvantage = true;
        }
      }
    });
    if(!this.afflictedBy.length){
      this.afflicted = false;
    }
    return currentEntity;
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
            if(element === 'blinded' || element === 'poisoned' || element === 'prone') {
              if(!this.afflictedBy.includes('blinded') && !this.afflictedBy.includes('poisoned') && !this.afflictedBy.includes('prone')){
                currentEntity.disadvantage = false;
              }
            }
          }
        });
      });
    }
    return currentEntity;
  }
}
