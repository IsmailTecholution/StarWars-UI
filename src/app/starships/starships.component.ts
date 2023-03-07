import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CommonService } from '../commonservice/common.service';
import { StarshipDialogComponent } from '../dialouges/starship-dialog/starship-dialog.component';
import { Starship, Starships } from '../models/starship-model';

@Component({
  selector: 'starwars-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
})
export class StarshipsComponent implements OnInit, OnDestroy {

  isLoading : boolean = false;

  getStarshipResultListListSub: Subscription;

  starShipResponseList :Starships;
  starShipResultList : Starship[];

  constructor(
    private commonService: CommonService,
    public dialog: MatDialog
  ){

  }

  ngOnInit(){
    this.getStarShipList();
  }

  getStarShipList(){
    this.isLoading = true;
    this.getStarshipResultListListSub = this.commonService.getItems<Starships>('starships').subscribe((res: Starships) => {
      this.starShipResponseList = res;
      this.starShipResultList = res.results;
      this.isLoading = false;
    }, error => {
      console.log('error came ----->',error);
    });
  }

  callDialog(data:Starship,index:number){
    this.dialog.open(StarshipDialogComponent,{
      data:data
    });
  }

  ngOnDestroy(){
    if(this.getStarshipResultListListSub){
      this.getStarshipResultListListSub.unsubscribe();
    }
  }
}
