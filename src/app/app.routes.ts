import { Route } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';
import { PoeplesComponent } from './poeples/poeples.component';
import { StarshipsComponent } from './starships/starships.component';

export const appRoutes: Route[] = [
    { path: "films", component: FilmsComponent },
    { path: "peoples", component: PoeplesComponent },
    { path: "planets", component: PlanetsComponent },
    { path: "starships", component: StarshipsComponent },
    
    { path: "", redirectTo: "films", pathMatch: 'full' }
];
