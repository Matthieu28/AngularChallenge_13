import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { PokedexServiceService } from 'src/app/shared/pokedex-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  pokemons: Pokemon[];
  selected: Pokemon | null;

  constructor(private pokedexService : PokedexServiceService, private router: Router) {
    this.pokemons = this.pokedexService.getPokemon();
    this.selected = null;
  }

  selectPokemon(pokemon: Pokemon): void {
    this.selected = pokemon;
  }

  clickNav(): void {
    this.router.navigate(['/create']);
  }
}
