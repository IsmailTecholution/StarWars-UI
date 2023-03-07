import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Starship } from 'src/app/models/starship-model';

@Component({
  selector: 'starwars-starship-dialog',
  templateUrl: './starship-dialog.component.html',
  styleUrls: ['./starship-dialog.component.scss'],
})
export class StarshipDialogComponent {
  avatarlist : Starship;
  
  constructor(
    public dialogRef: MatDialogRef<StarshipDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Starship,
  ){
    this.avatarlist = data;
  }
}
