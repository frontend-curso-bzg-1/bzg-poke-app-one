import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFavoriteCardComponent } from './poke-favorite-card.component';

describe('PokeFavoriteCardComponent', () => {
  let component: PokeFavoriteCardComponent;
  let fixture: ComponentFixture<PokeFavoriteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeFavoriteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeFavoriteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
