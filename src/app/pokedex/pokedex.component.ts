import {Component, inject, Input, OnInit} from '@angular/core';
import {IPokemon} from "../../services/entities";
import {CommonModule} from "@angular/common";
import {PokemonService} from "../../services/pokemon.service";
import {Router, RouterLink} from "@angular/router";
import {PokedexService} from "../../services/pokedex.service";

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {
  //@Input() pokemon!: IPokemon;
  pokedex: number[] = [];
  service = inject(PokemonService);
  servicePokedex = inject(PokedexService);
  pokemons:IPokemon[] | undefined =[];

  isOpen = false;

  constructor(private router: Router) { }

  openPokeball() {
    this.isOpen = true;
  }
  closePokeball() {
    this.isOpen = false;
  }
  ngOnInit() {
    this.pokedex = this.servicePokedex.getPokedex();
    for (let i = 0; i < this.pokedex.length; i++) {
      this.service.getPokemonById(this.pokedex[i]).subscribe(pokemon => this.pokemons?.push(pokemon));
      console.log(this.pokemons);
    }
  }
}
