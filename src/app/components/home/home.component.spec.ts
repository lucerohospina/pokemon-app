import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { WholePokemon } from 'src/app/models/pokemon';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const pokemons: WholePokemon[] = [
    {
      id: 1000,
      name: 'My Pokemon',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png',
      attack: 25,
      defense: 50,
      hp: 20,
      type: 'Eléctrico',
      idAuthor: 1,
    },
    {
      id: 1001,
      name: 'My Pokemon II',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png',
      attack: 75,
      defense: 20,
      hp: 30,
      type: 'Eléctrico',
      idAuthor: 1,
    }
  ];

  const mockPokemonService = {
    getPokemons: () => of(pokemons)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ HomeComponent ],
      providers:[
        { provide: PokemonsService, useValue: mockPokemonService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get pokemons', () => {
    const getPokemonsSpy = spyOn((component as any).pokemonsService, 'getPokemons')
      .and.returnValue(of(pokemons));
    
    component.ngOnInit();

    expect(getPokemonsSpy).toHaveBeenCalled();
    expect(pokemons.length).toBe(2);
  });
});
