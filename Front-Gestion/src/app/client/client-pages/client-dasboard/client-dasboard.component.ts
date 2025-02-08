import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client-dasboard',
  imports: [
    CommonModule,
  ],
  templateUrl: './client-dasboard.component.html',
  styleUrl: './client-dasboard.component.css'
})
export class ClientDasboardComponent {
  items = [
    { nombre: 'Elemento 1' },
    { nombre: 'Elemento 2' },
    { nombre: 'Elemento 3' }
  ];

  editarItem(item: any) {
    console.log('Editando:', item);
    // Aquí podrías abrir un modal o permitir edición en línea
  }

  eliminarItem(index: number) {
    this.items.splice(index, 1);
  }
}
