import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { usuario } from '../../Models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UsuariosService {
  private baseUrl = 'http://127.0.0.1:8000'; // URL base del backend
  private token = localStorage.getItem('token');

  constructor( private httpClient: HttpClient) { }

  usuarios: usuario[] = [];

  getUsuarios(): Observable<usuario[]>{ {
    const headers = new HttpHeaders({
      Authorization: `token ${this.token}`
    });
    return this.httpClient.get<usuario[]>(`${this.baseUrl}/usuarios_list/`, { headers });
   }
  }
}