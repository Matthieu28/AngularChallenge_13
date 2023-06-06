import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { CreatePokemonComponent } from './pages/create-pokemon/create-pokemon.component';

const routes: Routes = [
  {
    path: 'pokedex', component: PokedexComponent
  },
  {
    path: "create", component: CreatePokemonComponent
  },
  {
    path: '', redirectTo: "pokedex", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
