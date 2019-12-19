import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AfflictionInterface } from '../../Interfaces/AfflictionInterface';
import { AfflictionServiceService } from '../../Services/AfflictionService/affliction-service.service';
@Component({
  selector: 'app-affliction-modal',
  templateUrl: './affliction-modal.component.html',
  styleUrls: ['./affliction-modal.component.css']
})
export class AfflictionModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AfflictionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AfflictionInterface,
    private afflictionService: AfflictionServiceService,
    ) {}

  condition = new String();

  saved() {
    this.afflictionService.setSaved(true);
    this.dialogRef.close();
  }

  failed() {
    this.afflictionService.setSaved(false);
    this.dialogRef.close();
  }

}
