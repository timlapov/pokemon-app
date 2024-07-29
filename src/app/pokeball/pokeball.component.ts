import {Component, inject, Input, OnInit} from '@angular/core';
import {IPokemon} from "../../services/entities";
import {CommonModule} from "@angular/common";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokeball',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokeball.component.html',
  styleUrl: './pokeball.component.css'
})
export class PokeballComponent implements OnInit {
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
