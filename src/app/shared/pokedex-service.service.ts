import { Injectable } from '@angular/core';
import { POKEMONS } from '../pokemon-mock';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {
  private pokemons: Pokemon[];

  constructor() {
    this.pokemons = POKEMONS;
  }

  getPokemon() {
    return this.pokemons;
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }
}
