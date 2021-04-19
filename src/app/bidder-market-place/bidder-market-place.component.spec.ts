import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderMarketPlaceComponent } from './bidder-market-place.component';

describe('BidderMarketPlaceComponent', () => {
  let component: BidderMarketPlaceComponent;
  let fixture: ComponentFixture<BidderMarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderMarketPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
