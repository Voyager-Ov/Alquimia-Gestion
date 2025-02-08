import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { usuario } from '../../Models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UsuariosService {
  private token = localStorage.getItem('token');

  constructor( private httpClient: HttpClient) { }

  usuarios: usuario[] = [];

  getUsuarios(): Observable<usuario[]>{ {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Agregar el token al header
    });

    return this.httpClient.post<usuario[]>(`http://127.0.0.1:8000/listar_filtrar_usuarios`, { headers });
  
   }
  }
}