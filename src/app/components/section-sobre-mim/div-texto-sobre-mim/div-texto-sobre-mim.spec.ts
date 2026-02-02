import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivTextoSobreMim } from './div-texto-sobre-mim';

describe('DivTextoSobreMim', () => {
  let component: DivTextoSobreMim;
  let fixture: ComponentFixture<DivTextoSobreMim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivTextoSobreMim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivTextoSobreMim);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
