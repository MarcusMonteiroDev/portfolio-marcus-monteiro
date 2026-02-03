import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormacao } from './card-formacao';

describe('CardFormacao', () => {
  let component: CardFormacao;
  let fixture: ComponentFixture<CardFormacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFormacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFormacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
