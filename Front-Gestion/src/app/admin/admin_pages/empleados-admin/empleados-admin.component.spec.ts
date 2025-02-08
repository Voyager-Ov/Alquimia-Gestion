import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosAdminComponent } from './empleados-admin.component';

describe('EmpleadosAdminComponent', () => {
  let component: EmpleadosAdminComponent;
  let fixture: ComponentFixture<EmpleadosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
