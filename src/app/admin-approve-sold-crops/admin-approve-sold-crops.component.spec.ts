import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveSoldCropsComponent } from './admin-approve-sold-crops.component';

describe('AdminApproveSoldCropsComponent', () => {
  let component: AdminApproveSoldCropsComponent;
  let fixture: ComponentFixture<AdminApproveSoldCropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveSoldCropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveSoldCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
