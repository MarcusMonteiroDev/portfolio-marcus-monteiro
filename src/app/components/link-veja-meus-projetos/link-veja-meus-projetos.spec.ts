import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkVejaMeusProjetos } from './link-veja-meus-projetos';

describe('LinkVejaMeusProjetos', () => {
  let component: LinkVejaMeusProjetos;
  let fixture: ComponentFixture<LinkVejaMeusProjetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkVejaMeusProjetos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkVejaMeusProjetos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
