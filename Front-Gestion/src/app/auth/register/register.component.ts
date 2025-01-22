import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsuariosService } from '../../core/servicios/Usuario-Service/usuarios.service';


@Component({
  selector: 'app-register',
  imports: [CommonModule,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';

  constructor(private router: Router, private usuariosService: UsuariosService) {}

  onSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password
    };
  }


}
