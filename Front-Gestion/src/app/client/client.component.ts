import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-client',
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  menuItems = [
    {
      path: '/cliente/dashboard',
      icon: 'bi bi-speedometer2',
      text: 'Dashboard',
    },
    {
      path: '/cliente/mis-pedidos',
      icon: 'bi bi-box-seam',
      text: 'Mis Pedidos',
    },
    {
      path: '/cliente/mis-suscripcion',
      icon: 'bi bi-card-checklist',
      text: 'Mis Suscripciones',
    },
    {
      path: '',
      icon: '',
      text: '',
    },
    {
      path: '/cliente/configuracion',
      icon: 'bi bi-gear',
      text: 'Settings',
    },
    {
      path: '/cliente/perfil',
      icon: 'bi bi-person-circle',
      text: 'Profile',
    },
  ];

}
