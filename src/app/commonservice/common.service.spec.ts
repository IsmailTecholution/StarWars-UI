import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonService } from './common.service';
import { FilmsComponent } from '../films/films.component';
import { delay, of } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Films } from '../models/film-model';

describe('CommonService', () => {
  let service: CommonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommonService,
        {provide: MatDialog, useValue: {}},
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},] 
    });
    service = TestBed.inject(CommonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getData should use GET to retrieve data', () => {
    service.getItems('films').subscribe();
 
    const testRequest = httpMock.expectOne('https://swapi.dev/api/films');
 
    expect(testRequest.request.method).toEqual('GET');
  });

  it('#getData should return expected data', (done) => {
    let expectedData: Films[] = [];

    service.getItems('films').subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpMock.expectOne('https://swapi.dev/api/films');

    testRequest.flush(expectedData);
  });

  // it('#getData should return an empty object on error', (done) => {
  //   const expectedData: Films[] = []

  //   service.getItems('films').subscribe(data => {
  //     expect(data).toEqual(expectedData);
  //     done();
  //   });

  //   const testRequest = httpMock.expectOne('https://swapi.dev/api/films');

  //   testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  // });

});
