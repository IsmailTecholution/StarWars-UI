import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CommonService } from '../commonservice/common.service';
import { PlanetDialogComponent } from '../dialouges/planet-dialog/planet-dialog.component';
import { Planets, Planet } from '../models/planet-model';

@Component({
  selector: 'starwars-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit, OnDestroy {

  isLoading : boolean = false;

  getPlanetsListSub: Subscription;

  plantesResponseList :Planets;
  plantesResultList : Planet[];

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
    this.getPlanetsListSub = this.commonService.getItems<Planets>('planets').subscribe((res: Planets) => {
      this.plantesResponseList = res;
      this.plantesResultList = res.results;
      this.isLoading = false;
    }, error => {
      console.log('error came ----->',error);
    });
  }

  callDialog(data:Planet,index:number){
    this.dialog.open(PlanetDialogComponent,{
      data:data
    });
  }

  ngOnDestroy(){
    if(this.getPlanetsListSub){
      this.getPlanetsListSub.unsubscribe();
    }
  }
}
