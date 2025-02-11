import { Component, OnInit } from '@angular/core';
import { suscripcion } from '../../../core/Models/suscripcion.model';
import { TablaComponent } from '../../../shared/tabla/tabla.component';
import { SuscripcionService } from '../../../core/servicios/Suscripcion-Service/suscripcion.service';
import { DatosExpandiblesComponent } from '../../../shared/datos-expandibles/datos-expandibles.component';
import { FormComponent } from '../../../shared/form/form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormField } from '../../../core/Models/FormField.models';
import { ClienteService } from '../../../core/servicios/Cliente-Service/cliente.service';

@Component({
  selector: 'app-suscriptores-admin',
  imports: [
    TablaComponent,
    DatosExpandiblesComponent,
    FormComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './suscriptores-admin.component.html',
  styleUrl: './suscriptores-admin.component.css'
})
export class SuscriptoresAdminComponent implements OnInit{

  constructor(
    private SuscripcionService: SuscripcionService, 
    private clienteservice: ClienteService) 
    { }

  suscripciones: suscripcion[] = [];
  subSeleccionada: suscripcion[] = [];
  columns = [
    { key: 'id', label: 'id' },
    { key: 'tipo_suscripcion', label: 'Tipo Suscripcion' },
    { key: 'usuario.username', label: "Nombre de Usuario" },
    { key: 'fecha_inicio', label: 'Fecha de Inicio' },
    { key: 'fecha_fin', label: 'Fecha de Finalizacion' },
    { key: "precio", label: "Precio" },
    { key: 'estado', label: 'Esatdo' },
  ];
  // variabels para cerear usuario en un componente reutilizable
    subFields: FormField[] = [
    {
      key: 'tipo_suscripcion',
      label: 'Tipo Suscripcion',
      type: 'select',
      options: [
        { value: 'familiar', label: 'Familar' },
        { value: 'individual', label: 'Individual' },
        { value: 'pareja', label: 'Pareja' },
        { value: 'alquimia', label: 'Alquimia' },
      ]
    },
    {
      key: 'username',
      label: 'Nombre de Usuario',
      type: 'select',
      options: []
    },
    {
      key: 'fecha_inicio',
      label: 'Fecha de Inicio',
      type: 'date',
    },
    {
      key: 'fecha_fin',
      label: 'Fecha de Finalizacion',
      type: 'date',
    },
    {
      key: 'precio',
      label: 'Precio',
      type: 'float',
    },
    {
      key: 'estado',
      label: 'Esatdo',
      type: 'select',
      options: [
        { value: 'activa', label: 'Activa' },
        { value: 'desactiva', label: 'Desactiva' },
       
      ]
    },
  ];
  edit = [
    { key: 'tipo_suscripcion', label: 'Tipo Suscripcion' },
    { key: 'fecha_inicio', label: 'Fecha de Inicio' },
    { key: 'fecha_fin', label: 'Fecha de Finalizacion' },
    { key: 'precio', label: 'Precio' },
    { key: 'estado', label: 'Esatdo' },
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
    this.subSeleccionada = fila
    this.desplegado = true
  }


  // maneja la logica para actualizar la suscripcion
  onGuardarSub(datosActualizados: suscripcion) {
    this.SuscripcionService.actualizarSub(datosActualizados).subscribe({
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

  onEliminarSub(fila: any) {
      // Lógica para eliminar
      this.SuscripcionService.eliminarSub(fila).subscribe({
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
  // crear suscripcion
  onSubSubmit(subData: suscripcion) {
    this.SuscripcionService.crearSub(subData).subscribe({
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

  reloadTabla() {
    this.SuscripcionService.listarSubs().subscribe({
      next: (subs) => {
        this.suscripciones = subs;
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
        const usernameField = this.subFields.find(field => field.key === 'username');
        if (usernameField) {
          usernameField.options = userOptions;
        }
      }
    })
  }
}
