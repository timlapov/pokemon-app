import { Injectable } from '@angular/core';
import { IPokemon } from './entities';
import {HttpClient} from "@angular/common/http";
import {map, Observable, toArray} from "rxjs";
import { IPokemonType } from './entities';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = environment.apiURL;
  constructor( private http: HttpClient ) { }
  getAll() {
    return this.http.get<IPokemon[]>(this.url);
  }
  getPokemonById(id: number) {
    return this.http.get<IPokemon>(`${this.url}/${id}`);
  }
  getThreePokemonByType(typeName: string): Observable<IPokemon[]> {
    return this.getAll().pipe(
      map(pokemons => pokemons
        .filter(pokemon => pokemon.types && Array.isArray(pokemon.types))  // Проверяем, что types существует и является массивом
        .filter(pokemon =>
          pokemon.types.some(type => type.name.toLowerCase() === typeName.toLowerCase())
        )
        .slice(0, 3)
      )
    );
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
