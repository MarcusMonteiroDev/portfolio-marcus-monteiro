import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkConhecerProjeto } from './link-conhecer-projeto';

describe('LinkConhecerProjeto', () => {
  let component: LinkConhecerProjeto;
  let fixture: ComponentFixture<LinkConhecerProjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkConhecerProjeto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkConhecerProjeto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
