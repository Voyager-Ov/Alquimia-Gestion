import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { cliente } from '../../core/Models/cliente.model';
import { RegistroService } from "../../core/servicios/Registro-service/registro.service"


@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  first_name: string = '';
  last_name: string = '';
  telefono: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  direccion: string = ''; // Assuming direccion is a string
  pedidos: any[] = []; // Assuming pedidos is an array
  suscripciones: any[] = []; // Assuming suscripciones is an array
  errorMessage: string = '';

  constructor(private router: Router, private RegistroService: RegistroService) {}

  registro() {
    const user: cliente = {
      first_name: this.first_name,
      last_name: this.last_name,
      telefono: this.telefono,
      email: this.email,
      username: this.username,
      password: this.password,
      direccion: this.direccion,
      pedidos: this.pedidos,
      suscripciones: this.suscripciones
    };
    this.RegistroService.register(user).subscribe({
      next: (response) => {
        // Handle successful registration, e.g., navigate to login page
        this.router.navigate(['/inicio-de-sesion']);
      },
      error: (error) => {
        this.errorMessage = 'Registration failed';
        console.log(error);
      }
    })
  }


  
}
