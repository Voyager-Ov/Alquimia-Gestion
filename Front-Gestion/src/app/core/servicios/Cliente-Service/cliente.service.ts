import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cliente } from '../../Models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://127.0.0.1:8000'; // URL base del backend

  constructor( private httpClient: HttpClient) { }

  getClientes(): Observable<cliente[]> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
  return this.httpClient.get<cliente[]>(`${this.baseUrl}/usuarios_clientes`, { headers })
  }

  actualizarCliente(datos: any): Observable<any> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    return this.httpClient.put<any>(`${this.baseUrl}/actualizar_usuario`, datos, { headers });
  }

  eliminarCliente(filter: any): Observable<any> {
    const header = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    const options = {
      headers: header,
      body: { filtro: filter }
    };
    return this.httpClient.delete<any>(`${this.baseUrl}/eliminar_usuario`, options);
  }

  filtrarClientes(filter: any): Observable<any> {
    const header = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    const options = {
      headers: header,
      body: { filtro: filter }
    };
    return this.httpClient.post<any>(`${this.baseUrl}/filtrar_usuarios`, options);
  }

  // funcion para opbtener el token
  getToken(): string | null {
    const token = sessionStorage.getItem('token');
    return token
  }
}
