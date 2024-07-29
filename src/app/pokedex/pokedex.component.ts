import {Component, inject, Input, OnInit} from '@angular/core';
import {IPokemon} from "../../services/entities";
import {CommonModule} from "@angular/common";
import {PokemonService} from "../../services/pokemon.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {
  //@Input() pokemon!: IPokemon;
  pokemonIds: number[] = [1, 2, 3];
  service = inject(PokemonService);
  pokemons:IPokemon[] | undefined =[];

  isOpen = false;

  openPokeball() {
    this.isOpen = true;
  }
  closePokeball() {
    this.isOpen = false;
  }
  ngOnInit() {
    for (let i= 1; i < this.pokemonIds.length + 1; i++) {
      this.service.getPokemonById(i).subscribe(pokemon => this.pokemons?.push(pokemon));
      console.log(this.pokemons);
    }
  }
}
