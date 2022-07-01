import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosrecomendadosComponent } from './productosrecomendados.component';

describe('ProductosrecomendadosComponent', () => {
  let component: ProductosrecomendadosComponent;
  let fixture: ComponentFixture<ProductosrecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosrecomendadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosrecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
