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
  service = inject(PokemonService);
  pokemon:IPokemon | undefined;

  isOpen = false;

  openPokeball() {
    this.isOpen = true;
  }
  closePokeball() {
    this.isOpen = false;
  }
  ngOnInit() {
    this.service.getPokemonById(2).subscribe(pokemon => this.pokemon = pokemon);
  }
}
