import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMarketPlaceComponent } from './farmer-market-place.component';

describe('FarmerMarketPlaceComponent', () => {
  let component: FarmerMarketPlaceComponent;
  let fixture: ComponentFixture<FarmerMarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMarketPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
