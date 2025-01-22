import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsuariosService } from '../../core/servicios/Usuario-Service/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private usuariosService: UsuariosService) {}

  
  onSubmit() {
    const usuarios = this.usuariosService.getUsuarios();
    const usuario = usuarios.find(user => user.email === this.email && user.password === this.password);
    if (usuario) {
      console.log('Usuario autenticado:', usuario);
      if (usuario.user === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else if (usuario.user === 'cliente') {
        this.router.navigate(['/cliente/dashboard']);
      }
    } else {
      console.log('Credenciales incorrectas');
    }
  }

  loginWithGoogle() {
    console.log('Login with Google');
  }
  
  
}

