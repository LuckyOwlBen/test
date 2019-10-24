import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Entity } from '../../Models/Entity';
import { AddCharacterModalComponent } from '../add-character-modal/add-character-modal.component';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {

  @Input() public newEntity: Entity;
  entities: Entity[];
  selectedEntity: Entity;
  name: string;

  constructor(public dialog: MatDialog ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open( AddCharacterModalComponent, {
      width: '15rem'
    });
    dialogRef.afterClosed().subscribe(result => {
    this.newEntity = result;
    this.entities.push(this.newEntity);
    });
  }

}


