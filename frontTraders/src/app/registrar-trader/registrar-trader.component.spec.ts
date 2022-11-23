import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTraderComponent } from './registrar-trader.component';

describe('RegistrarTraderComponent', () => {
  let component: RegistrarTraderComponent;
  let fixture: ComponentFixture<RegistrarTraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTraderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
