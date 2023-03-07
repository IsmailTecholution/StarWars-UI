import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { PoeplesComponent } from './poeples/poeples.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleDialogComponent } from './dialouges/people-dialog/people-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlanetDialogComponent } from './dialouges/planet-dialog/planet-dialog.component';
import { StarshipDialogComponent } from './dialouges/starship-dialog/starship-dialog.component';
import { FilmsComponent } from './films/films.component';
import { FilmDialogComponent } from './dialouges/film-dialog/film-dialog.component';
import { LoginComponent } from './login/login.component';
import { CommonService } from './commonservice/common.service';

@NgModule({
  declarations: [
    AppComponent,
    PoeplesComponent,
    PlanetsComponent,
    StarshipsComponent,
    PeopleDialogComponent,
    PlanetDialogComponent,
    StarshipDialogComponent,
    FilmsComponent,
    FilmDialogComponent,
    LoginComponent,
  ],
  imports: [
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  entryComponents: [PeopleDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
