import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { CarritoService } from "../../../core/services/carrito/carrito.service";
import { carrito } from "../../../core/Models/carrito.model";
import { Subscription, filter, map} from 'rxjs';

@Component({
  selector: 'app-client-pedidos',
  imports: [
    CommonModule,
    NgFor,
  ],
  templateUrl: './client-pedidos.component.html',
  styleUrl: './client-pedidos.component.css',
  providers: [CarritoService]
})
export class ClientPedidosComponent implements OnInit, OnDestroy {

  carrito?: carrito[];

  constructor(
    private carritoService: CarritoService,
  ) { }

  subscription =  new Subscription();

    ngOnInit(): void {
    this.subscription.add(this.carritoService.getProductos().subscribe({
      next: (value) => {
        this.carrito = value;
        console.log(value);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Completado");},
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log("Se destruyó el componente");
  }

}
