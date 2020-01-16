import { Component, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogData } from '../../../Interfaces/DialogData';
import { Entity } from '../../../Models/Entity';

@Component({
  selector: 'app-add-character-modal',
  templateUrl: './add-character-modal.component.html',
  styleUrls: ['./add-character-modal.component.css']
})
export class AddCharacterModalComponent {

  isValid: boolean;
  constructor(
    public dialogRef: MatDialogRef<AddCharacterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  validation(): boolean {
    if(this.data.entity.name != null && this.data.entity.maxHp != null && this.data.entity.armorClass != null) {
      this.isValid = true;
    }else{
      this.isValid = false;
    }
    return this.isValid;
  }

  submit() {
    this.dialogRef.close(this.data.entity);
  }
}
