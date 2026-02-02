import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDonwloadCurriculo } from './btn-donwload-curriculo';

describe('BtnDonwloadCurriculo', () => {
  let component: BtnDonwloadCurriculo;
  let fixture: ComponentFixture<BtnDonwloadCurriculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDonwloadCurriculo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDonwloadCurriculo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
