import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'http://localhost:8000'; // Cambia a la URL de tu backend
  private TOKEN_KEY = 'authToken';

  constructor(private http: HttpClient) {}

  //login
  login(username: string, password: string): Observable<any> {
    return this.http.post(`http://localhost:8000/login`, { username, password });
  }

  //perfil
  getPerfil(): Observable<any> {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.getToken()
    });
    return this.http.get(`${this.apiUrl}/perfil`, { headers });
  }

  //logout
  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');

  }

  //token 
  getToken(): string | null {
    const token = sessionStorage.getItem('token');
    return token
  }

  saveToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

}
