import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carrito } from '../../Models/carrito.model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private baseUrl = 'http://127.0.0.1:8000'; // URL base del backend
  private username = 'octavio'; // Usuario de Basic Auth
  private password = '123'; // Contraseña de Basic Auth


  constructor( private httpClient: HttpClient) { }

  carrito: carrito[] = [];

  tremendaFuncion(): Observable<carrito[]>{
    return this.httpClient.get<carrito[]>("")
  }

  getProductos(): Observable<carrito[]> {

    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
    });

    return this.httpClient.get<carrito[]>(`${this.baseUrl}/usuarios_list/`, { headers });
  }
}
