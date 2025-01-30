import { TestBed } from '@angular/core/testing';

import { PedidosServiceService } from './pedidos-service.service';

describe('PedidosServiceService', () => {
  let service: PedidosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
