import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CommonService } from '../commonservice/common.service';
import { FilmDialogComponent } from '../dialouges/film-dialog/film-dialog.component';
import { Film, Films } from '../models/film-model';

@Component({
  selector: 'starwars-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit, OnDestroy {
  isLoading : boolean = false;

  getFilmsListSub: Subscription;

  filmsResponseList :Films;
  filmsResultList : Film[];

  constructor(
    private commonService: CommonService,
    public dialog: MatDialog
  ){

  }

  ngOnInit(){
    this.getPlanetsList();
  }

  getPlanetsList(){
    this.isLoading = true;
    this.getFilmsListSub = this.commonService.getItems<Films>('films').subscribe((res: Films) => {
      this.filmsResponseList = res;
      this.filmsResultList = res.results;
      this.isLoading = false;
    }, error => {
      console.log('error came ----->',error);
    });
  }

  callDialog(data:Film,index:number){
    this.dialog.open(FilmDialogComponent,{
      data:data,
      height: '85%',
      width: '70%'
    });
  }

  ngOnDestroy(){
    if(this.getFilmsListSub){
      this.getFilmsListSub.unsubscribe();
    }
  }
}
