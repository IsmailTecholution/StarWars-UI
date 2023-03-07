import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  
  getItems<T>(type:string): Observable<T> {
    return this.http.get<T>(`${environment.appHostName}/api/${type}`)
    .pipe(
      catchError(this.handleError) // then handle the error
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("An error occurred:", error.error.message);
    } else {
      console.log(
        `Backend returned code ${error.error.status}, ` + `body was: ${error.error.error}`
      );
    }
    return throwError(error);
  }
}
