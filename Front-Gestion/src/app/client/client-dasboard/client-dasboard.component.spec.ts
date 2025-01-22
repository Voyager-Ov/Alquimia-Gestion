import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDasboardComponent } from './client-dasboard.component';

describe('ClientDasboardComponent', () => {
  let component: ClientDasboardComponent;
  let fixture: ComponentFixture<ClientDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDasboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
