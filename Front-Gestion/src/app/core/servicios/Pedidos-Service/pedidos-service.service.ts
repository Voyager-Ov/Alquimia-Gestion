import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pedido } from '../../Models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosServiceService {
   private baseUrl = 'http://127.0.0.1:8000'; // URL base del backend
    private token = localStorage.getItem('token');
  
    constructor( private httpClient: HttpClient) { }
  
    pedidos: pedido[] = [];
  
    getUsuarios(): Observable<pedido[]>{ {
      const headers = new HttpHeaders({
        Authorization: `token ${this.token}`
      });
      return this.httpClient.get<pedido[]>(`${this.baseUrl}/pedidos_list/`, { headers });
     }
    }
}
