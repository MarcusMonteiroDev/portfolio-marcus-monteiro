import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSobreMim } from './section-sobre-mim';

describe('SectionSobreMim', () => {
  let component: SectionSobreMim;
  let fixture: ComponentFixture<SectionSobreMim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSobreMim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSobreMim);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
