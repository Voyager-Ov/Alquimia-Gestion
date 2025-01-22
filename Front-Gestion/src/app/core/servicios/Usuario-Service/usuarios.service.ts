import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios = [
    { email: 'Juan', password: '855', user: 'admin' },
    { email: 'octavio', password: '123', user: 'cliente' },
    { email: 'lucas', password: 'hola', user: 'admin' },
  ];
  constructor() {}

  getUsuarios() {
    return this.usuarios;
  }
  
}