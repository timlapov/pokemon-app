import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private _pokedex: any[] = [];

  setPokedex(pokedex: any[]) {
    this._pokedex = pokedex;
  }

  getPokedex(): any[] {
    return this._pokedex;
  }
  clearPokedex() {
    this._pokedex = [];
  }

}
