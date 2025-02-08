import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosExpandiblesComponent } from './datos-expandibles.component';

describe('DatosExpandiblesComponent', () => {
  let component: DatosExpandiblesComponent;
  let fixture: ComponentFixture<DatosExpandiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosExpandiblesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosExpandiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
