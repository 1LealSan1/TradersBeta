import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesDisponblesComponent } from './peticiones-disponbles.component';

describe('PeticionesDisponblesComponent', () => {
  let component: PeticionesDisponblesComponent;
  let fixture: ComponentFixture<PeticionesDisponblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionesDisponblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeticionesDisponblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
