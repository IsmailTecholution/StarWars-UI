import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Planet } from 'src/app/models/planet-model';

@Component({
  selector: 'starwars-planet-dialog',
  templateUrl: './planet-dialog.component.html',
  styleUrls: ['./planet-dialog.component.scss'],
})
export class PlanetDialogComponent {
  avatarlist : Planet;
  
  constructor(
    public dialogRef: MatDialogRef<PlanetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Planet,
  ){
    this.avatarlist = data;
  }
}
