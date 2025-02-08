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

  constructor(private AuthServiceService: AuthServiceService, private router: Router) { }

  onLogin() {
    this.AuthServiceService.login(this.username, this.password).subscribe(
      {
        next: res => {
          console.log(res); // Ver qué devuelve el backend
          
          this.AuthServiceService.saveToken(res.token)
          sessionStorage.setItem('user', JSON.stringify(res.user));          
          
          const type_user = res.user.tipo_de_usuario;

          // Redirigir según el tipo de usuario
          if (type_user === 'administrador') {
            this.router.navigate(['/admin/dashboard']);
          } else if (type_user === "cliente") {
            this.router.navigate(['/cliente/dashboard']);
          } else {
            this.router.navigate(['/inicio-de-sesion']); // Si el tipo de usuario es desconocido
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

  
}

