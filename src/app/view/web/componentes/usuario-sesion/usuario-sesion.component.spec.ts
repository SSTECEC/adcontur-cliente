import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSesionComponent } from './usuario-sesion.component';

describe('UsuarioSesionComponent', () => {
  let component: UsuarioSesionComponent;
  let fixture: ComponentFixture<UsuarioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
