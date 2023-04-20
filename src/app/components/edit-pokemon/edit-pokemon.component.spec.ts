import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPokemonComponent } from './edit-pokemon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditPokemonComponent', () => {
  let component: EditPokemonComponent;
  let fixture: ComponentFixture<EditPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule, 
        ReactiveFormsModule
      ],
      declarations: [ EditPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
