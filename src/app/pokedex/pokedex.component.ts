import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {PokeballComponent} from "../pokeball/pokeball.component";

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [
    RouterLink,
    PokeballComponent
  ],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

}
