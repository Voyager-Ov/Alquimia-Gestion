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
    { key: 'username', label: 'Nombre' },
    { key: 'descripcion', label: 'Apellido' },
    { key: 'fecha_de_recepcion', label: 'Email' },
    { key: 'fecha_de_entrega', label: 'Telefono' },
    { key: 'precio', label: 'Direccion' },
    { key: 'estado_de_pedido', label: 'Nombre de usuario' },
    { key: 'estado_de_pago', label: 'Password' }
  ];
   constructor(private PedidosServiceService: PedidosServiceService) { }
  
    ngOnInit(): void {
      this.PedidosServiceService.getUsuarios().subscribe({
        next: (pedidos) => {
          this.pedidos = pedidos;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
}
