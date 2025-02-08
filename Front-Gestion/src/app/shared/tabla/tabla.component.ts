import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  imports: [
    CommonModule
  ],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  @Input() data: any[] = [];
  @Input() columns: { key: string, label: string }[] = [];
  @Output() mostrarFila = new EventEmitter<any>(); // Evento para mostrar
  

  mostarItem(fila: any) {
    // Lógica para mostar
    this.mostrarFila.emit(fila);
  }
}
