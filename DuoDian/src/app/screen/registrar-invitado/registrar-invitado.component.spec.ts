import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInvitadoComponent } from './registrar-invitado.component';

describe('RegistrarInvitadoComponent', () => {
  let component: RegistrarInvitadoComponent;
  let fixture: ComponentFixture<RegistrarInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarInvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
