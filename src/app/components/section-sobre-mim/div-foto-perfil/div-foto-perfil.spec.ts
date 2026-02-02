import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivFotoPerfil } from './div-foto-perfil';

describe('DivFotoPerfil', () => {
  let component: DivFotoPerfil;
  let fixture: ComponentFixture<DivFotoPerfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivFotoPerfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivFotoPerfil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
