import { Component } from '@angular/core';
import { pedido } from '../../../core/Models/pedido.model';
import { TablaComponent } from '../../../shared/tabla/tabla.component';
import { PedidosServiceService } from '../../../core/servicios/Pedidos-Service/pedidos-service.service';

@Component({
  selector: 'app-pedidos-admin',
  imports: [
    TablaComponent
  ],
  templateUrl: './pedidos-admin.component.html',
  styleUrl: './pedidos-admin.component.css'
})
export class PedidosAdminComponent {
  
  pedidos: pedido[] = [];
  columns = [
    { key: 'id', label: 'Id' },
    { key: 'username', label: 'Nombre de Usuario' },
    { key: 'descripcion', label: 'Descripcion' },
    { key: 'fecha_de_recepcion', label: 'Fecha de Recepcion' },
    { key: 'fecha_de_entrega', label: 'Fecha de Entrega' },
    { key: 'precio', label: 'Precio' },
    { key: 'estado_de_pedido', label: 'Estado de Pedido' },
    { key: 'estado_de_pago', label: 'Estado de Pago' }
  ];
   constructor(private PedidosServiceService: PedidosServiceService) { }
  
    ngOnInit(): void {
      this.PedidosServiceService.getPedidos().subscribe({
        next: (pedidos) => {
          this.pedidos = pedidos;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
}
