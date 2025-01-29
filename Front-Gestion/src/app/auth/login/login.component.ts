import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServiceService } from '../../core/servicios/Autenticacion-service/auth-service.service'; // Asegúrate de importar el servicio correctamente



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
  ]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private AuthServiceService: AuthServiceService) {}

  
  onLogin() {
    this.AuthServiceService.login(this.username, this.password).subscribe(
      (response) => {
        // Almacena el token en localStorage o cookies
        localStorage.setItem('token', response.token);
        console.log('Login exitoso', response);
      },
      (error) => {
        this.errorMessage = 'Usuario o Contraseña incorrectos';
        console.error('Error de login', error);
      }
    );
  }

  loginWithGoogle() {
    console.log('Login with Google');
  }
  
  
}

