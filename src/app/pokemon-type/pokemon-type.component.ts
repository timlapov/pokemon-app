import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {IPokemon} from "../../services/entities";
import {PokemonService} from "../../services/pokemon.service";
import {Observable} from "rxjs";

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
  service = inject(PokemonService);
  pokemonsByType: { [type: string]: Observable<IPokemon[]> } = {};

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.types.forEach(type => {
      this.pokemonsByType[type] = this.service.getThreePokemonByType(type);
    });
  }
}
