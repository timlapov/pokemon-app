import {Component, inject, OnInit} from '@angular/core';
import {ListPokemonComponent} from "../list-pokemon/list-pokemon.component";
import {IPokemon, IPokemonType} from "../../services/entities";
import {PokemonService} from "../../services/pokemon.service";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {PokemonTypeComponent} from "../pokemon-type/pokemon-type.component";
import {PokedexService} from "../../services/pokedex.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ListPokemonComponent, CommonModule, RouterLink, PokemonTypeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
pokedex: IPokemon[] = [];
pokemons:IPokemon[] = [];
types:IPokemonType[] = [];
service = inject(PokemonService);

constructor(private router: Router) { }

ngOnInit(): void {
        this.getAllPokemons();
        //this.getAllTypes();
    }
    getAllPokemons(): void {
  this.service.getAll().subscribe(data => {
    this.pokemons = data;
  })
    }

  //   getAllTypes(): void {
  // this.service.getAllTypes().subscribe(data => {
  //   this.types = data;
  //   console.log('test', this.types);
  // })
  //   }
}
