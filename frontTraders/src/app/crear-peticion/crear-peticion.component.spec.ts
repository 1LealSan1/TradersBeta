import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPeticionComponent } from './crear-peticion.component';

describe('CrearPeticionComponent', () => {
  let component: CrearPeticionComponent;
  let fixture: ComponentFixture<CrearPeticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPeticionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
