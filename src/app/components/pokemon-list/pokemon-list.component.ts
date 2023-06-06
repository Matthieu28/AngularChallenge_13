import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] | undefined;
  @Output() pokemonClick: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  onClick(pokemon: Pokemon): void {
    this.pokemonClick.emit(pokemon)
  }
}
