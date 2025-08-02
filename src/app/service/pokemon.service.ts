import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  constructor(public http: HttpClient) {}

  getPokemon(): Observable<any> {
    return this.http.get(this.apiPokemon);
  }
}
