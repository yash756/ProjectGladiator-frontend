import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCropsSoldComponent } from './farmer-crops-sold.component';

describe('FarmerCropsSoldComponent', () => {
  let component: FarmerCropsSoldComponent;
  let fixture: ComponentFixture<FarmerCropsSoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerCropsSoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerCropsSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
