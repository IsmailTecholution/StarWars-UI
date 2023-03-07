import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { People } from 'src/app/models/people-model';

@Component({
  selector: 'starwars-people-dialog',
  templateUrl: './people-dialog.component.html',
  styleUrls: ['./people-dialog.component.scss'],
})
export class PeopleDialogComponent {

  avatarlist : People;
  
  constructor(
    public dialogRef: MatDialogRef<PeopleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: People,
  ){
    this.avatarlist = data;
  }
}
