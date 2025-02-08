import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzasAdminComponent } from './finanzas-admin.component';

describe('FinanzasAdminComponent', () => {
  let component: FinanzasAdminComponent;
  let fixture: ComponentFixture<FinanzasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanzasAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanzasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
