import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarsesionRegistradoComponent } from './iniciarsesion-registrado.component';

describe('IniciarsesionRegistradoComponent', () => {
  let component: IniciarsesionRegistradoComponent;
  let fixture: ComponentFixture<IniciarsesionRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarsesionRegistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarsesionRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
