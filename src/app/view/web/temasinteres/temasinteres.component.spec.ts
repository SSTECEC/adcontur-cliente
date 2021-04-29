import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasinteresComponent } from './temasinteres.component';

describe('TemasinteresComponent', () => {
  let component: TemasinteresComponent;
  let fixture: ComponentFixture<TemasinteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasinteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasinteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
