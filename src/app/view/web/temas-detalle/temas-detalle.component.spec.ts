import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasDetalleComponent } from './temas-detalle.component';

describe('TemasDetalleComponent', () => {
  let component: TemasDetalleComponent;
  let fixture: ComponentFixture<TemasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
