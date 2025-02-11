import { Component, OnInit } from '@angular/core';
import { pedido } from '../../../core/Models/pedido.model';
import { TablaComponent } from '../../../shared/tabla/tabla.component';
import { PedidosServiceService } from '../../../core/servicios/Pedidos-Service/pedidos-service.service';
import { FormField } from '../../../core/Models/FormField.models';
import { ClienteService } from '../../../core/servicios/Cliente-Service/cliente.service';
import { DatosExpandiblesComponent } from '../../../shared/datos-expandibles/datos-expandibles.component';
import { FormComponent } from '../../../shared/form/form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos-admin',
  imports: [
    TablaComponent,
    DatosExpandiblesComponent,
    FormComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './pedidos-admin.component.html',
  styleUrl: './pedidos-admin.component.css'
})
export class PedidosAdminComponent implements OnInit{

  constructor(
    private PedidosServiceService: PedidosServiceService,
    private clienteservice: ClienteService,
   ) { }


  pedidos: pedido[] = [];
  pedidoSeleccionado: pedido[] = []
  columns = [
    { key: 'id', label: 'Id' },
    { key: 'username', label: 'Nombre de Usuario' },
    { key: 'tipo_servicio', label: 'Tipo de Servicio' },
    { key: 'descripcion', label: 'Descripcion' },
    { key: 'fecha_pedido', label: 'Fecha de Recepcion' },
    { key: 'fecha_entrega', label: 'Fecha de Entrega' },
    { key: 'precio', label: 'Precio' },
    { key: 'estado_pedido', label: 'Estado de Pedido' },
    { key: 'estado_pago', label: 'Estado de Pago' }
  ];
  // variabels para cerear usuario en un componente reutilizable
  PedidoFields: FormField[] = [
    {
      key: 'username',
      label: 'Nombre de Usuario',
      type: 'select',
      options: []
    },
    {
      key: 'tipo_servicio',
      label: 'Tipo Servicio',
      type: 'text',
    },
    {
      key: 'descripcion',
      label: 'Descripcion',
      type: 'text',
    },
    {
      key: 'fecha_recepcion',
      label: 'Fecha de recepcion',
      type: 'date',
    },
    {
      key: 'fecha_entrega',
      label: 'Fecha de Entrega',
      type: 'date',
    },
    {
      key: 'precio',
      label: 'Precio',
      type: 'float',
    },
    {
      key: 'estado_pedido',
      label: 'Esatdo de Pedido',
      type: 'select',
      options: [
        { value: 'pendiente', label: 'Pendiente' },
        { value: 'en_proceso', label: 'En Proceso' },
        { value: 'listo', label: 'Listo' },
        { value: 'cancelado', label: 'Cancelado' },
      ]
    },
    {
      key: 'estado_pago',
      label: 'Esatdo de Pago',
      type: 'select',
      options: [
        { value: 'pendiente', label: 'Pendiente' },
        { value: 'pagado', label: 'Pagado' },
        { value: 'reembolsado', label: 'Reembolsado' },
      ]
    },
  ];

  edit = [
    { key: 'descripcion', label: 'Descripcion' },
    { key: 'fecha_de_recepcion', label: 'Fecha de Recepcion' },
    { key: 'fecha_de_entrega', label: 'Fecha de Entrega' },
    { key: 'precio', label: 'Precio' },
    { key: 'estado_pedido', label: 'Estado de Pedido' },
    { key: 'estado_pago', label: 'Estado de Pago' }
  ];
  desplegado = false
  popup = false
  errorMessage = ""
  guardado = false

  
  
  ngOnInit(): void {
    this.reloadTabla()
    this.loadRecentUsers();
  }

  // controla mostrar los datos de una fila
    mostardatos(fila: any): void {
      this.pedidoSeleccionado = fila
      this.desplegado = true
    }
  
    // maneja la logica para actualizar la suscripcion
    onGuardarPedido(datosActualizados: pedido) {
      this.PedidosServiceService.actualizar_pedido(datosActualizados).subscribe({
        next: (response) => {
          this.guardado = true
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.reloadTabla()
          this.desplegado = false
        }
        });
    }
  
    onEliminarPedido(fila: any) {
        // Lógica para eliminar
        this.PedidosServiceService.eliminar_pedido(fila).subscribe({
          next: (response) => {
            console.log("eliminado")
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            this.reloadTabla()
            this.desplegado = false
          }
        })
      }
  
    onCancelarEdicion() {
      // Lógica opcional si necesitas hacer algo al cancelar
      this.desplegado = false
    }
  
    openClosePopup(): void {
      this.popup = true
    }
  
    onSalirPopup(evento: boolean): void {
      this.popup = false
    }

    //crear pedido
    onSubSubmit(subData: pedido) {
      this.PedidosServiceService.crear_pedido(subData).subscribe({
        next: (response) => {
        },
        error: (error) => {
          this.errorMessage = 'error de datos';
        },
        complete: () => {
          this.reloadTabla()
        }
      })
    }
  
    reloadTabla() {
      this.PedidosServiceService.listar_pedidos().subscribe({
        next: (pedidos) => {
          this.pedidos = pedidos;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  
    loadRecentUsers() {
      this.clienteservice.getClientes().subscribe({
        next: (response) => {
          // Mapear los usuarios a opciones para el select
          const userOptions = response.map(user => ({
            value: user.username, // Suponiendo que cada usuario tiene un `id`
            label: user.username // Suponiendo que cada usuario tiene un `username`
          }));
  
          // Actualizar el campo `username` con las opciones dinámicas
          const usernameField = this.PedidoFields.find(field => field.key === 'username');
          if (usernameField) {
            usernameField.options = userOptions;
          }
        }
      })
    }
}
