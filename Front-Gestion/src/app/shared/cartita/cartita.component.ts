import { Component, Input } from '@angular/core';
import { pedido } from '../../core/Models/pedido.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cartita',
  imports: [
    CommonModule,
  ],
  templateUrl: './cartita.component.html',
  styleUrl: './cartita.component.css'
})
export class CartitaComponent {

  @Input() cartita: any;

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
