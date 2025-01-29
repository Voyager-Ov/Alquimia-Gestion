import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAdminComponent } from './clientes-admin.component';

describe('ClientesAdminComponent', () => {
  let component: ClientesAdminComponent;
  let fixture: ComponentFixture<ClientesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
