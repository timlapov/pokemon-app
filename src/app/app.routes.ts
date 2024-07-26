import { Routes } from '@angular/router';

import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";
import {Error404Component} from "./error-404/error-404.component";
import {HomeComponent} from "./home/home.component";
import {PokedexComponent} from "./pokedex/pokedex.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon/:id', component: PokemonDetailsComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: '**', component: Error404Component },
];
