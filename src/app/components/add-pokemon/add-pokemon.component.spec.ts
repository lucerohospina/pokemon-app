import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonnDetailsComponent } from './add-pokemon.component';

describe('PokemonnDetailsComponent', () => {
  let component: PokemonnDetailsComponent;
  let fixture: ComponentFixture<PokemonnDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonnDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
