import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, WholePokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  endpoint = "/pokemon";

  constructor(private apiService: ApiService) { }

  getPokemons(): Observable<WholePokemon[]> {
    let params = new HttpParams();

    params = params.append(
      'idAuthor',
      String(1)
    );
    
    return this.apiService.get<WholePokemon[]>(
      `${this.endpoint}`, params
    );
  }

  addPokemon(newPokemon: Pokemon) {
    const payload = {
      name: newPokemon.name,
      image: newPokemon.image,
      attack: newPokemon.attack,
      defense: newPokemon.defense,
      hp: newPokemon.hp,
      type: newPokemon.type,
      idAuthor: newPokemon.idAuthor
    };

    return this.apiService.post(`${this.endpoint}`, payload);
  }

  editPokemon(pokemon: WholePokemon) {
    const payload = {
      name: pokemon.name,
      image: pokemon.image,
      attack: pokemon.attack,
      defense: pokemon.defense,
      hp: pokemon.hp,
      type: pokemon.type,
      idAuthor: pokemon.idAuthor
    };

    return this.apiService.put(`${this.endpoint}/${pokemon.id}`, payload);
  }

  deletePokemon(id: number) {
    return this.apiService.delete(`${this.endpoint}/${id}`);
  }
}
