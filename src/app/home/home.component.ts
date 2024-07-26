import {Component, inject, OnInit} from '@angular/core';
import {ListPokemonComponent} from "../list-pokemon/list-pokemon.component";
import {IPokemon, IPokemonType} from "../../services/entities";
import {PokemonService} from "../../services/pokemon.service";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ListPokemonComponent, CommonModule, RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

pokemons:IPokemon[] = [];
types:IPokemonType[] = [];
service = inject(PokemonService);

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
