import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-admin',
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  menuItems = [
    {
      path: '/admin/dashboard',
      icon: 'bi bi-speedometer2',
      text: 'Dashboard',
    },
    {
      path: '/admin/pedidos',
      icon: 'bi bi-box-seam',
      text: 'Pedidos',
    },
    {
      path: '/admin/suscripciones',
      icon: 'bi bi-card-checklist',
      text: 'Suscripciones',
    },
    {
      path: '/admin/clientes',
      icon: 'bi bi-people',
      text: 'Clientes',
    },
    {
      path: '/admin/finanzas',
      icon: 'bi bi-wallet',
      text: 'finanzas',
    },
    {
      path: '/admin/inventario',
      icon: 'bi bi-archive',
      text: 'Inventario',
    },
    {
      path: '/admin/Maquinaria',
      icon: 'bi bi-robot',
      text: 'Maquinaria',
    },
    {
      path: '/admin/Empleados',
      icon: 'bi bi-person-raised-hand',
      text: 'Empleados',
    },
    {
      path: '',
      icon: '',
      text: '',
    },
    {
      path: '/admin/settings',
      icon: 'bi bi-gear',
      text: 'Settings',
    },
    {
      path: '/admin/perfil',
      icon: 'bi bi-person-circle',
      text: 'Profile',
    },
  ];

}
