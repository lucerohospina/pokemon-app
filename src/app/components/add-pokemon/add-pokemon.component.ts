import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {
  @Output() isCancelled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cancelPokemonsDetails = new EventEmitter();
  @Output() refreshPokemons = new EventEmitter();
  newPokemonForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private pokemonService: PokemonsService) {}

  ngOnInit(): void {
      this.createNewPokemonForm();
  }

  createNewPokemonForm() {
    this.newPokemonForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      attack: [0, [Validators.required]],
      image: '',
      defense: [0, [Validators.required]]
    });
  }

  addPokemon() {
    if (this.newPokemonForm.invalid) return;

    const newPokemon: Pokemon = {
      name: this.newPokemonForm.get('name')?.value,
      image: this.newPokemonForm.get('image')?.value,
      attack: this.newPokemonForm.get('attack')?.value,
      defense: this.newPokemonForm.get('defense')?.value,
      hp: 55,
      type: 'Eléctrico',
      idAuthor: 1
    };

    this.pokemonService.addPokemon(newPokemon).subscribe({
      next: () => this.refreshPokemons.emit()
    });
  }

  cancel(): void {
    this.cancelPokemonsDetails.emit();
  }
}
