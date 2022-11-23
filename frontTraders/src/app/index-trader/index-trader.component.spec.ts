import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTraderComponent } from './index-trader.component';

describe('IndexTraderComponent', () => {
  let component: IndexTraderComponent;
  let fixture: ComponentFixture<IndexTraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTraderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
