import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddercheckstatusComponent } from './biddercheckstatus.component';

describe('BiddercheckstatusComponent', () => {
  let component: BiddercheckstatusComponent;
  let fixture: ComponentFixture<BiddercheckstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddercheckstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddercheckstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
