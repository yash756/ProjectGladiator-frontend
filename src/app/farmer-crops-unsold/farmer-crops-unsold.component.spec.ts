import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCropsUnsoldComponent } from './farmer-crops-unsold.component';

describe('FarmerCropsUnsoldComponent', () => {
  let component: FarmerCropsUnsoldComponent;
  let fixture: ComponentFixture<FarmerCropsUnsoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerCropsUnsoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerCropsUnsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
