import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {IPokemon} from "../../services/entities";
import {PokemonService} from "../../services/pokemon.service";
import {Observable} from "rxjs";
import {PokedexService} from "../../services/pokedex.service";

@Component({
  selector: 'app-pokemon-type',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './pokemon-type.component.html',
  styleUrl: './pokemon-type.component.css'
})
export class PokemonTypeComponent implements OnInit {
  types: string[] =   ["Plante", "Feu", "Eau"];
  type: string = "";
  pokedex: any[] = [];
  service = inject(PokemonService);
  servicePokedex = inject(PokedexService);
  pokemonsByType: { [type: string]: Observable<IPokemon[]> } = {};

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokedex = this.servicePokedex.getPokedex();
    this.types.forEach(type => {
      this.pokemonsByType[type] = this.service.getThreePokemonByType(type);
    });
  }

  addPokemonIdToPokedex(id: number): void {
    this.pokedex.push(id);
    this.servicePokedex.setPokedex(this.pokedex);
    alert("Pokémon ajoutés avec succès");
  }
}
