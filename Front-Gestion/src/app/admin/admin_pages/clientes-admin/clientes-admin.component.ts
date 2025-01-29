import { Component } from '@angular/core';
import { usuario } from "../../../core/Models/usuario.model";
import { UsuariosService } from "../../../core/servicios/Usuario-Service/usuarios.service";
import { OnInit } from '@angular/core';
import { TablaComponent } from "../../../shared/tabla/tabla.component"

@Component({
  selector: 'app-clientes-admin',
  imports: [
    TablaComponent
  ],
  templateUrl: './clientes-admin.component.html',
  styleUrl: './clientes-admin.component.css'
})
export class ClientesAdminComponent implements OnInit {
  usuarios: usuario[] = [];
  columns = [
    { key: 'id', label: 'Id' },
    { key: 'nombre', label: 'Nombre' },
    { key: 'apellido', label: 'Apellido' },
    { key: "cantidad", label: "Cantidad" },
    { key: 'email', label: 'Email' },
    { key: 'telefono', label: 'Telefono' },
    { key: 'direccion', label: 'Direccion' },
    { key: 'nombre_de_usuario', label: 'Nombre de usuario' },
    { key: 'password', label: 'Password' }
  ];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
