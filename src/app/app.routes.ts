import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { SearchHeroeComponent } from './components/search-heroe/search-heroe.component';
import { VillainsComponent } from './components/villains/villains.component';
import { VillainDetailsComponent } from './components/villain-details/villain-details.component';

const APP_ROUTE: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  {path: "villains", component: VillainsComponent},
  { path: 'detalles/:id', component: HeroDetailsComponent },
  {path:"detalles2/:id", component:VillainDetailsComponent},
  { path: 'buscar/:id', component: SearchHeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);
