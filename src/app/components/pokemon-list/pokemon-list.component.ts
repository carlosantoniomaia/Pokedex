import { PokemonService } from './../../service/pokemon.service';
import { Component, inject } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
private pokemonService = inject(PokemonService);
pokemonList = [];

  constructor(){
    this.pokemonService.getPokemon().subscribe({
      next: (res) => {;
        this.pokemonList = res.results;
      },
      error: (err) => {console.error('erro ao carregar', err)}
    })
  }
  
}
