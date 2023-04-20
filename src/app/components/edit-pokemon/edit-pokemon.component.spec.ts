import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPokemonComponent } from './edit-pokemon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { WholePokemon } from 'src/app/models/pokemon';
import { of } from 'rxjs';

describe('EditPokemonComponent', () => {
  let component: EditPokemonComponent;
  let fixture: ComponentFixture<EditPokemonComponent>;

  const mockPokemonService = {
    editPokemon: (pokemon: WholePokemon) => of()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule, 
        ReactiveFormsModule
      ],
      declarations: [ EditPokemonComponent ],
      providers: [
        { provide: PokemonsService, useValue: mockPokemonService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit pokemon', () => {
    const editPokemonSpy = spyOn(mockPokemonService, 'editPokemon')
      .and.returnValue(of());

    component.editPokemonForm.get('name')?.patchValue('My Pokemon II');
    component.editPokemonForm.get('image')?.setValue('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png');
    component.editPokemonForm.get('attack')?.setValue(70);
    component.editPokemonForm.get('defense')?.setValue(40);
    
    component.editPokemon();

    expect(editPokemonSpy).toHaveBeenCalled();
  });
});
