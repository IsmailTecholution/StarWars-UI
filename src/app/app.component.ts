import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'starwars-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'starwars';

  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit(){

  }

  callLogIn(){
    this.dialog.open(LoginComponent);
  }
}
