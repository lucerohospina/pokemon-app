import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WholePokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {
  @Input() pokemon: WholePokemon;
  @Output() cancelEditPokemon = new EventEmitter();
  @Output() refreshPokemons = new EventEmitter();
  editPokemonForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private pokemonService: PokemonsService) {}

  ngOnInit(): void {
    this.createEditPokemonForm();
  }

  createEditPokemonForm() {
    this.editPokemonForm = this.formBuilder.group({
      name: [this.pokemon?.name, [Validators.required]],
      attack: [this.pokemon?.attack, [Validators.required]],
      image: this.pokemon?.image,
      defense: [this.pokemon?.defense, [Validators.required]]
    });
  }

  editPokemon() {
   if (this.editPokemonForm.invalid) return;

   const pokemon: WholePokemon = {
      id: this.pokemon?.id,
      name: this.editPokemonForm.get('name')?.value,
      image: this.editPokemonForm.get('image')?.value,
      attack: this.editPokemonForm.get('attack')?.value,
      defense: this.editPokemonForm.get('defense')?.value,
      hp: this.pokemon?.hp,
      type: this.pokemon?.type,
      idAuthor: this.pokemon?.idAuthor
   };

   this.pokemonService.editPokemon(pokemon).subscribe({
    next: () =>this.refreshPokemons.emit()
   });
  }

  cancel() {
    this.cancelEditPokemon.emit();
  }
}
