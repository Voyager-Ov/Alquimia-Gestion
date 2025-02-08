import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariaAdminComponent } from './maquinaria-admin.component';

describe('MaquinariaAdminComponent', () => {
  let component: MaquinariaAdminComponent;
  let fixture: ComponentFixture<MaquinariaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaquinariaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquinariaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
