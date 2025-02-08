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
  private token = sessionStorage.getItem('token');

  constructor( private httpClient: HttpClient) { }

  pedidos: pedido[] = [];

  getPedidos(): Observable<pedido[]> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    return this.httpClient.get<pedido[]>(`${this.baseUrl}/pedidos/`, { headers })
  }
  //token 
  getToken(): string | null {
    const token = sessionStorage.getItem('token');
    return token
  }
}
