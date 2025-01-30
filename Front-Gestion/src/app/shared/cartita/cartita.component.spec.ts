import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartitaComponent } from './cartita.component';

describe('CartitaComponent', () => {
  let component: CartitaComponent;
  let fixture: ComponentFixture<CartitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
