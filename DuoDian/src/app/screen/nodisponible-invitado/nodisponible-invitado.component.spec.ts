import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodisponibleInvitadoComponent } from './nodisponible-invitado.component';

describe('NodisponibleInvitadoComponent', () => {
  let component: NodisponibleInvitadoComponent;
  let fixture: ComponentFixture<NodisponibleInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodisponibleInvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodisponibleInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
