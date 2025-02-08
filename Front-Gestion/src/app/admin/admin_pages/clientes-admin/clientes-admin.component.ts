import { Component } from '@angular/core';
import { cliente } from "../../../core/Models/cliente.model";
import { OnInit } from '@angular/core';
import { TablaComponent } from "../../../shared/tabla/tabla.component"
import { ClienteService } from '../../../core/servicios/Cliente-Service/cliente.service';
import { DatosExpandiblesComponent } from '../../../shared/datos-expandibles/datos-expandibles.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormField } from '../../../core/Models/FormField.models';
import { FormComponent } from '../../../shared/form/form.component';
import { RegistroService } from '../../../core/servicios/Registro-service/registro.service';

@Component({
  selector: 'app-clientes-admin',
  imports: [
    TablaComponent,
    DatosExpandiblesComponent,
    FormComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './clientes-admin.component.html',
  styleUrl: './clientes-admin.component.css'
})
export class ClientesAdminComponent implements OnInit {
  // variabels para cerear usuario en un componente reutilizable
  userFields: FormField[] = [
    {
      key: 'first_name',
      label: 'Nombre completo',
      type: 'text',
    },
    {
      key: 'last_name',
      label: 'Apellido',
      type: 'text',
    },
    {
      key: 'email',
      label: 'Correo electrónico',
      type: 'email',
    },
    {
      key: 'direccion',
      label: 'Direccion',
      type: 'text',
    },
    {
      key: 'telefono',
      label: 'Telefono',
      type: 'number',
    },
    {
      key: 'username',
      label: 'Nombre de Usuario',
      type: 'text',
    },
    {
      key: 'password',
      label: 'Contraseña',
      type: 'text',
    },
  ];


  clientes: cliente[] = [];
  clienteSeleccionado: cliente[] = [];
  columns = [
    { key: 'id', label: 'Id' },
    { key: 'first_name', label: 'Nombre' },
    { key: 'last_name', label: 'Apellido' },
    { key: 'email', label: 'Email' },
    { key: 'telefono', label: 'Telefono' },
    { key: 'direccion', label: 'Direccion' },
    { key: 'username', label: 'Nombre de usuario' },
  ];
  edit = [
    { key: 'first_name', label: 'Nombre' },
    { key: 'last_name', label: 'Apellido' },
    { key: 'email', label: 'Email' },
    { key: 'telefono', label: 'Telefono' },
    { key: 'direccion', label: 'Direccion' },
  ];
  desplegado = false
  popup = false
  errorMessage = ""
  guardado = false

  

  constructor(private clienteService: ClienteService, private RegistroService: RegistroService) { }

  ngOnInit(): void {
    this.reloadTabla()
  }
  


  mostardatos(fila: any): void {
    this.clienteSeleccionado = fila
    this.desplegado = true
  }
  
  onGuardarCliente(datosActualizados: any) {
    // Lógica para enviar al backend
    this.clienteService.actualizarCliente(datosActualizados).subscribe({
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

  onEliminarCliente(fila: cliente) {
    // Lógica para eliminar
    this.clienteService.eliminarCliente(fila).subscribe({
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

  //crear usuario
  openClosePopup(): void {
    this.popup = true
  }

  onSalirPopup(evento: boolean): void {
    this.popup = false
  }

  onUserSubmit(userData: any) {
    // Aquí enviarías los datos al backend
    this.RegistroService.register(userData).subscribe({
      next: (response) => {
        // Handle successful registration, e.g., navigate to login page
      },
      error: (error) => {
        this.errorMessage = 'Registration failed';
      },
      complete: () => {
        this.reloadTabla()
      }
    })
  }

  // def para actualizar los datos de la tabla xcada que se peuda
  reloadTabla() {
    this.clienteService.getClientes().subscribe({
      next: (clientes) => {
        this.clientes = clientes;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
}
