import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cliente } from '../../Models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:8000/register/'; // Cambia a la URL de tu backend

  constructor(private http: HttpClient) {}

  register(user: cliente): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
