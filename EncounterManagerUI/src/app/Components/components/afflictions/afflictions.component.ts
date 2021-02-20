import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Entity } from '../../../Models/Entity';
import { AfflictionModalComponent } from '../../Modals/affliction-modal/affliction-modal.component';
import { AfflictionServiceService } from '../../../Services/AfflictionService/affliction-service.service';
import { CombatDataService } from '../../../Services/CombatData/combat-data.service';


@Component({
  selector: 'app-afflictions',
  templateUrl: './afflictions.component.html',
  styleUrls: ['./afflictions.component.css']
})
export class AfflictionsComponent {

  constructor(
    public dialog: MatDialog,
    private afflictionService: AfflictionServiceService,
    private combatData: CombatDataService,
    ){}

  afflicted = false;
  afflictedBy = new Array();

  checkAfflicted(currentEntity: Entity): Entity {
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
    return currentEntity;
  }

  removeAffliction(currentEntity: Entity): Entity {
    if(this.afflicted){
      this.afflictedBy.forEach(element =>{
        this.afflictionService.setCondition(element);
        const dialogRef = this.dialog.open(AfflictionModalComponent, {
          width: '15rem',
          disableClose: true,
          data: {
            condition: element,
            name: currentEntity.name
          },
        });
        dialogRef.afterClosed().subscribe(result => {
          if (this.afflictionService.getSaved()) {
            if(element === "unconcious") {
              currentEntity.deathSavingThrowFail = 0;
              currentEntity.deathSavingThrowSuccess = 0;
            }
            currentEntity.condition.set(element, false);
          }
        });
      });
    }
    return currentEntity;
  }
}
