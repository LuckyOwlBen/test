import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Entity } from '../../Models/Entity';
import { AddCharacterModalComponent } from '../add-character-modal/add-character-modal.component';
import { RollInitiativeService } from '../../Services/roll-initiative.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {

  @Input() public newEntity: Entity;
  entities: Entity[] = [];
  selectedEntity: Entity;
  name: string;
  currentIndex: number;

  constructor(
      public dialog: MatDialog,
      private rollInitiativeService: RollInitiativeService,
      private router: Router,
    ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open( AddCharacterModalComponent, {
      width: '15rem',
      data: { entity: new Entity() }
    });
    dialogRef.afterClosed().subscribe(result => {
    this.newEntity = result;
    if (this.newEntity != null) {
      this.entities.push(this.newEntity);
    }
    });
  }

  editDialog(selectedEntity): void {
    const dialogRef = this.dialog.open( AddCharacterModalComponent, {
      width: '15rem',
      data: { entity: selectedEntity }
    });
    dialogRef.afterClosed().subscribe(result => {
    this.selectedEntity = result;
    this.currentIndex = this.entities.indexOf(selectedEntity);
    this.entities.splice(this.currentIndex, 1 , selectedEntity);
    });
  }

  removeEntity(selectedEntity): void {
    this.currentIndex = this.entities.indexOf(selectedEntity);
    this.entities.splice(this.currentIndex, 1);
  }

  entityTransfer(): void {
    this.rollInitiativeService.setData(this.entities);
    this.router.navigate(['/combat']);
  }

}


