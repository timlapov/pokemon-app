import {Component, Input, OnInit} from '@angular/core';
import {IPokemon} from "../../services/entities";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit {
  @Input() pokemonsForList: IPokemon[] = [];

  twentyPokemons: IPokemon[] = [];

  ngOnInit() {
    if (this.pokemonsForList.length > 1) {
      const availablePokemons = this.pokemonsForList.slice(1); // Исключаем нулевой элемент
      this.twentyPokemons = this.getRandomPokemons(availablePokemons, 20);
    }
  }
  private getRandomPokemons(pokemons: IPokemon[], count: number): IPokemon[] {
    const shuffled = pokemons.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, pokemons.length));
  }

  showDetails(pokemon: IPokemon) {

  }
}
