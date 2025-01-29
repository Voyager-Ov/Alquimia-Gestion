import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptoresAdminComponent } from './suscriptores-admin.component';

describe('SuscriptoresAdminComponent', () => {
  let component: SuscriptoresAdminComponent;
  let fixture: ComponentFixture<SuscriptoresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuscriptoresAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscriptoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
