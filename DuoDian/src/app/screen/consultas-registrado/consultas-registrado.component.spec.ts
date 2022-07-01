import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasRegistradoComponent } from './consultas-registrado.component';

describe('ConsultasRegistradoComponent', () => {
  let component: ConsultasRegistradoComponent;
  let fixture: ComponentFixture<ConsultasRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasRegistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
