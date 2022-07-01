import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRegistradoComponent } from './menu-registrado.component';

describe('MenuRegistradoComponent', () => {
  let component: MenuRegistradoComponent;
  let fixture: ComponentFixture<MenuRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRegistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
