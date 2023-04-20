import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPokemonComponent } from './add-pokemon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Pokemon } from 'src/app/models/pokemon';
import { of } from 'rxjs';

describe('AddPokemonComponent', () => {
  let component: AddPokemonComponent;
  let fixture: ComponentFixture<AddPokemonComponent>;

  const mockPokemonService = {
    addPokemon: (pokemon: Pokemon) => of()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule, 
        ReactiveFormsModule
      ],
      declarations: [ AddPokemonComponent ],
      providers: [
        { provide: PokemonsService, useValue: mockPokemonService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add pokemon', () => {
    const addPokemonSpy = spyOn(mockPokemonService, 'addPokemon')
      .and.returnValue(of());

    component.newPokemonForm.get('name')?.setValue('My Pokemon');
    component.newPokemonForm.get('image')?.setValue('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png');
    component.newPokemonForm.get('attack')?.setValue(70);
    component.newPokemonForm.get('defense')?.setValue(40);
    
    component.addPokemon();

    expect(addPokemonSpy).toHaveBeenCalled();
  });
});
