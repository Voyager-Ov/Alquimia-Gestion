import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../core/servicios/Autenticacion-service/auth-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-cliente',
  imports: [
    CommonModule,
  ],
  templateUrl: './perfil-cliente.component.html',
  styleUrl: './perfil-cliente.component.css'
})
export class PerfilClienteComponent {
  pefil: any;
  
    userProfile: any
    constructor(private AuthServiceService: AuthServiceService, private router: Router) {}
  
  
    ngOnInit(): void {
      this.loadProfile();
    }
  
    loadProfile(): void {
      this.AuthServiceService.getPerfil().subscribe(
        {
          next: res => {
            this.pefil = res
          },
          error: err => {
            console.log(err)
           },
           complete: () => {
           }
  
        }
      );
    }
  
    onLogout(): void {
      this.AuthServiceService.logout();
      this.router.navigate(['/inicio-de-sesion']);  
    }
  

}
