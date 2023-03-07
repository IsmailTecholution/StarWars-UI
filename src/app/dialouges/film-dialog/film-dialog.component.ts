import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from 'src/app/models/film-model';

@Component({
  selector: 'starwars-film-dialog',
  templateUrl: './film-dialog.component.html',
  styleUrls: ['./film-dialog.component.scss'],
})
export class FilmDialogComponent {
  avatarlist : Film;
  
  constructor(
    public dialogRef: MatDialogRef<FilmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Film,
  ){
    this.avatarlist = data;
  }
}
