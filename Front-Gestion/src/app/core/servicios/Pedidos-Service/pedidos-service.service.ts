import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { pedido } from '../../Models/pedido.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidosServiceService {
   private baseUrl = 'http://127.0.0.1:8000'; // URL base del backend
    private token = localStorage.getItem('token');
  
    constructor( private httpClient: HttpClient) { }
  

    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No se encontró el token de autenticación.');
      }
      return new HttpHeaders({
        Authorization: `token ${token}`
      });
    }
    getPedidos(): Observable<pedido[]> {
      const headers = this.getHeaders();
      return this.httpClient.get<pedido[]>(`${this.baseUrl}/pedidos/`, { headers }).pipe(
        catchError((error) => {
          console.error('Error al obtener los pedidos:', error);
          return throwError(() => new Error('No se pudieron cargar los pedidos.'));
        })
      );
    }
  
    getUsuarios(): Observable<pedido[]>{ {
      const headers = new HttpHeaders({
        Authorization: `token ${this.token}`
      });
      return this.httpClient.get<pedido[]>(`${this.baseUrl}/pedidos_list/`, { headers });
     }
    }
}
