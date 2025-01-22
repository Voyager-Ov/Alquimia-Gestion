import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSusbcriptionComponent } from './admin-susbcription.component';

describe('AdminSusbcriptionComponent', () => {
  let component: AdminSusbcriptionComponent;
  let fixture: ComponentFixture<AdminSusbcriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSusbcriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSusbcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
