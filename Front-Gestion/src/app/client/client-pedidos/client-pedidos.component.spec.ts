import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPedidosComponent } from './client-pedidos.component';

describe('ClientPedidosComponent', () => {
  let component: ClientPedidosComponent;
  let fixture: ComponentFixture<ClientPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientPedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
