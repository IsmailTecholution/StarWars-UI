import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'starwars-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>
  ){}

  onCloseLogin(){
    this.dialogRef.close();
  }
}
