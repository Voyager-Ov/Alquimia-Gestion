import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionClientComponent } from './suscripcion-client.component';

describe('SuscripcionClientComponent', () => {
  let component: SuscripcionClientComponent;
  let fixture: ComponentFixture<SuscripcionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuscripcionClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscripcionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
