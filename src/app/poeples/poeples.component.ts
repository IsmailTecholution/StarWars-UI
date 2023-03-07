import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../commonservice/common.service';
import { Peoples, People } from '../models/people-model';
import {MatDialog} from '@angular/material/dialog';
import { PeopleDialogComponent } from '../dialouges/people-dialog/people-dialog.component';

@Component({
  selector: 'starwars-poeples',
  templateUrl: './poeples.component.html',
  styleUrls: ['./poeples.component.scss'],
})
export class PoeplesComponent implements OnInit, OnDestroy {

  private getPeoplesListSub: Subscription;

  private peoplesResponseList :Peoples;
  public peopleResultList : People[];

  isLoading : boolean = false;

  constructor(
    private commonService: CommonService,
    public dialog: MatDialog
  ){

  }

  ngOnInit(){
    this.getPeoplesList();
  }

  getPeoplesList(){
    this.isLoading = true;
    this.getPeoplesListSub = this.commonService.getItems<Peoples>('people').subscribe((res: Peoples) => {
      this.peoplesResponseList = res;
      this.peopleResultList = res.results;
      this.isLoading = false;
    }, error => {
      console.log('error came ----->',error);
    });
  }


  callDialog(data:People,index:number){
    this.dialog.open(PeopleDialogComponent,{
      data:data
    });
  }

  ngOnDestroy(){
    if(this.getPeoplesListSub){
      this.getPeoplesListSub.unsubscribe();
    }
  }
}
