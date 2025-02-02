import { Component } from '@angular/core';
import { suscripcion } from '../../../core/Models/suscripcion.model';
import { TablaComponent } from '../../../shared/tabla/tabla.component';

@Component({
  selector: 'app-suscriptores-admin',
  imports: [
    TablaComponent
  ],
  templateUrl: './suscriptores-admin.component.html',
  styleUrl: './suscriptores-admin.component.css'
})
export class SuscriptoresAdminComponent {
  suscripciones: suscripcion[] = [];
    columns = [
      { key: 'tipo', label: 'Tipo' },
      { key: 'fecha_inicio', label: 'Fecha de Inicio' },
      { key: 'fecha_fin', label: 'Fecha de Finalizacion' },
      { key: "precio", label: "Precio" },
    ];
    

}
