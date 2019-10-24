import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../Interfaces/DialogData';


@Component({
  selector: 'app-add-character-modal',
  templateUrl: './add-character-modal.component.html',
  styleUrls: ['./add-character-modal.component.css']
})
export class AddCharacterModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AddCharacterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
    this.dialogRef.close();
  }
}
