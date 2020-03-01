import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersmedicauxComponent } from './dossiersmedicaux.component';

describe('DossiersmedicauxComponent', () => {
  let component: DossiersmedicauxComponent;
  let fixture: ComponentFixture<DossiersmedicauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersmedicauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersmedicauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
