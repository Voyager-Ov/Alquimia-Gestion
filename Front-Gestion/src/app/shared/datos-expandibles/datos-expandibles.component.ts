import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '../../core/Models/FormField.models';

@Component({
  selector: 'app-datos-expandibles',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './datos-expandibles.component.html',
  styleUrl: './datos-expandibles.component.css'
})
export class DatosExpandiblesComponent implements OnInit {
  @Input() objeto: any; // Objeto a mostrar
  @Input() campos: { key: string; label: string }[] = []; // Campos a mostrar
  @Output() guardar = new EventEmitter<any>();
  @Output() eliminar = new EventEmitter<any>();
  @Output() salir = new EventEmitter<void>();
  
  form!: FormGroup;
  editando = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.inicializarFormulario(this.objeto);
  }

  private inicializarFormulario(objeto: any) {
    const formGroup: any = {};
    this.campos.forEach(campo => {
      formGroup[campo.key] = [objeto[campo.key] ?? '', []];
    });
    this.form = this.fb.group(formGroup);
    this.deshabilitarFormulario();
  }

  habilitarEdicion() {
    this.editando = true;
    this.form.enable();
  }

  cancelarEdicion() {
    this.editando = false;
    this.form.reset(this.objeto);
    this.deshabilitarFormulario();
  }

  guardarCambios() {
    if (this.form.valid) {
      const datosActualizados = { ...this.objeto, ...this.form.value };
      this.guardar.emit(datosActualizados);
      this.editando = false;
      this.deshabilitarFormulario();
    }
  }

  private deshabilitarFormulario() {
    this.form.disable();
  }

  eliminarItem() {
    this.eliminar.emit(this.objeto);
  }

}
