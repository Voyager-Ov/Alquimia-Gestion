import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { usuario } from '../../Models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UsuariosService {
  private baseUrl = 'http://127.0.0.1:8000'; // URL base del backend
  private username = 'octavio'; // Usuario de Basic Auth
  private password = '123'; // Contraseña de Basic Auth

  constructor( private httpClient: HttpClient) { }

  usuarios: usuario[] = [];

  getUsuarios(): Observable<usuario[]>{ {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
    });
    return this.httpClient.get<usuario[]>(`${this.baseUrl}/usuarios_list/`, { headers });
   }
  }
}