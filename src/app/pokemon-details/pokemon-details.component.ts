import {Component, inject, Input, OnInit} from '@angular/core';
import {IPokemon} from "../../services/entities";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: IPokemon | undefined;

  service = inject(PokemonService);

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params['id'];
    });

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getPokemonBy(id);
    });
  }

  getPokemonBy(id: number) {
    this.service.getPokemonById(id).subscribe(
      (pokemon: IPokemon | undefined) => this.pokemon = pokemon,
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

}
