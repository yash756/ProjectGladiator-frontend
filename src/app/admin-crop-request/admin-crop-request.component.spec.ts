import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCropRequestComponent } from './admin-crop-request.component';

describe('AdminCropRequestComponent', () => {
  let component: AdminCropRequestComponent;
  let fixture: ComponentFixture<AdminCropRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCropRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCropRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
