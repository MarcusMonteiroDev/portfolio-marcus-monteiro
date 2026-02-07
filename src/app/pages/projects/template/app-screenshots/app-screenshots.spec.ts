import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScreenshots } from './app-screenshots';

describe('AppScreenshots', () => {
  let component: AppScreenshots;
  let fixture: ComponentFixture<AppScreenshots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppScreenshots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppScreenshots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
