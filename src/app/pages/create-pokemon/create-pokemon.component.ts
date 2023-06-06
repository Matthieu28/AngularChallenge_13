import { Component } from '@angular/core';
import { PokedexServiceService } from 'src/app/shared/pokedex-service.service';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { Router } from '@angular/router';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent {
  newPokemonForm: FormGroup;

  constructor(private fb: FormBuilder, private pokedexService: PokedexServiceService, private router: Router) {
    this.newPokemonForm = this.fb.group({
      nom: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.newPokemonForm.valid) {
      const newPokemon: Pokemon = {
        nom: this.newPokemonForm.get('nom')?.value,
        url: this.newPokemonForm.get('url')?.value,
        description: this.newPokemonForm.get('description')?.value
      }
      this.pokedexService.addPokemon(newPokemon);
      this.router.navigate(['/'])
    }
  }

  goBack(): void {
    this.router.navigate(['/'])
  }
}
