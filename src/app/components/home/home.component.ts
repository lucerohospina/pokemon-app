import { Component, OnInit } from '@angular/core';
import { WholePokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons: WholePokemon[] = [];
  showPokemonDetailsCard: boolean;
  showEditPoKemonCard: boolean;
  pokemonToEdit: WholePokemon;

  constructor(private pokemonsService: PokemonsService) {
    this.showPokemonDetailsCard = false;
    this.showEditPoKemonCard = false;
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getPokemons().subscribe({
      next: (response) => {
        this.pokemons = response;

        if (this.showPokemonDetailsCard) {
          this.showPokemonDetailsCard = false;
        }
          
        if (this.showEditPoKemonCard) {
          this.showEditPoKemonCard = false;
        }
      }
    });
  }

  addNewPokemon():void {
    this.showPokemonDetailsCard = true;
  }

  cancel() {
    this.showPokemonDetailsCard = false;
    this.showEditPoKemonCard = false;
  }

  editPokemon(pokemon: WholePokemon) {
    this.showEditPoKemonCard = true;
    this.pokemonToEdit = pokemon;
  }

  deletePokemon(pokemonId: number) {
    this.pokemonsService.deletePokemon(pokemonId).subscribe({
      next: () => this.getPokemons()
    })
  }
}
