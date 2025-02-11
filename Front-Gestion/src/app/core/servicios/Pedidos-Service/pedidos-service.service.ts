import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { pedido } from '../../Models/pedido.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidosServiceService {

  constructor( private http: HttpClient) { }
  private baseUrl = 'http://127.0.0.1:8000/pedidos'; // URL base del backend

  crear_pedido(ped: pedido): Observable<any> {
      const headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        Authorization: 'token ' + this.getToken()
      });
      return this.http.post<pedido>(`${this.baseUrl}/crear_pedido`, ped, { headers });
    }

  listar_pedidos(): Observable<pedido[]> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    return this.http.get<pedido[]>(`${this.baseUrl}/listar_pedidos`, { headers })
  }

  mis_pedidos(): Observable<pedido[]> {
      const headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        Authorization: 'token ' + this.getToken()
      });
      
      return this.http.get<pedido[]>(`${this.baseUrl}/mis_pedidos`,{ headers });
    }

  filtrar_pedidos(filtro: any): Observable<pedido[]> {
      const headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        Authorization: 'token ' + this.getToken()
      });
  
      return this.http.post<pedido[]>(`${this.baseUrl}/filtrar_pedidos`,{ filtro },{ headers });
    }

  eliminar_pedido(fila: any): Observable<any> {
    console.log(fila)
    const header = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    const options = {
      headers: header,
      body: fila 
    };
    return this.http.delete<any>(`${this.baseUrl}/eliminar_pedido`, options);
  }

  actualizar_pedido(datos: any): Observable<pedido> {
      const headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        Authorization: 'token ' + this.getToken()
      });
      return this.http.put<any>(`${this.baseUrl}/actualizar_suscripcion`, datos, { headers });
    }


  //token 
  getToken(): string | null {
    const token = sessionStorage.getItem('token');
    return token
  }
}
