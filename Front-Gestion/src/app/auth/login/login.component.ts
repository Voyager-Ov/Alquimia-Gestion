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
      {
        next: res => {
          console.log(res); // Ver qué devuelve el backend
    
          // Extraer el tipo de usuario
          const tipoUsuario = res.user.tipo_de_usuario;
    
          // Guardar en localStorage
          localStorage.setItem('user', JSON.stringify(res.user));
          localStorage.setItem('token', res.token);
    
          // Redirigir según el tipo de usuario
          if (tipoUsuario === 'administrador') {
            this.router.navigate(['/admin/dashboard']);
          } else if (tipoUsuario === 'cliente') {
            this.router.navigate(['/cliente/dashboard']);
          } else {
            this.router.navigate(['/login']); // Si el tipo de usuario es desconocido
          }
        },
        error: err => {
         console.log(err)
        },
        complete: () => {
          
        }
      }
    );
  }

  loginWithGoogle() {
    console.log('Login with Google');
  }
  
  onlogout() {
      // Elimina el token de localStorage o cookies
      localStorage.removeItem('token');
      localStorage.removeItem('tipo_de_usuario');
      this.router.navigate(['/login']);
  }
  
}

