import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { suscripcion } from '../../Models/suscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  constructor( private http: HttpClient) { }
  private baseUrl = 'http://127.0.0.1:8000/suscripciones'; // URL base del backend

  // Crear suscripción
  crearSub(sub: suscripcion): Observable<any> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    return this.http.post<suscripcion>(`${this.baseUrl}/crear_suscripcion`,sub,{ headers });
  }

  // Eliminar suscripción
  eliminarSub(fila: any): Observable<any> {
    const header = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    const options = {
      headers: header,
      body: fila 
    };
    return this.http.delete<any>(`${this.baseUrl}/eliminar_suscripcion`, options);
  }

  // Listar todas las suscripciones (solo admin/empleado)
  listarSubs(): Observable<suscripcion[]> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    return this.http.get<suscripcion[]>(`${this.baseUrl}/listar_suscripciones`,{ headers });
  }

  // Listar suscripciones del usuario actual
  misSubs(): Observable<suscripcion[]> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    
    return this.http.get<suscripcion[]>(`${this.baseUrl}/mis_suscripciones`,{ headers });
  }

  // Filtrar suscripciones
  filtrarSubs(filtro: any): Observable<suscripcion[]> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });

    return this.http.post<suscripcion[]>(`${this.baseUrl}/filtrar_suscripciones`,{ filtro },{ headers });
  }

  // Actualizar suscripción
  actualizarSub(datos: any): Observable<suscripcion> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    return this.http.put<any>(`${this.baseUrl}/actualizar_suscripcion`, datos, { headers });
  }

  // funcion para opbtener el token
  getToken(): string | null {
    const token = sessionStorage.getItem('token');
    return token
  }
}
