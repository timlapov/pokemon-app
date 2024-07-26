import { Injectable } from '@angular/core';
import { IPokemon } from './entities';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { IPokemonType } from './entities';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://tyradex.tech/api/v1/pokemon';
  constructor( private http: HttpClient ) { }
  getAll() {
    return this.http.get<IPokemon[]>(this.url);
  }
  getPokemonById(id: number) {
    return this.http.get<IPokemon>(`${this.url}/${id}`);
  }

  // getAllTypes(): Observable<IPokemonType[]> {
  //   return this.getAll().pipe(
  //     map(pokemons => {
  //       const uniqueTypes = new Set<string>();
  //       pokemons.forEach(pokemon => {
  //         pokemon.types.forEach(type => {
  //           uniqueTypes.add(JSON.stringify(type));
  //         });
  //       });
  //       return Array.from(uniqueTypes).map(type => JSON.parse(type));
  //     })
  //   );
  // }

}
