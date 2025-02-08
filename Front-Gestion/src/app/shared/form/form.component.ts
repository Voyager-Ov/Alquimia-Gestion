import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '../../core/Models/FormField.models'

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent{
  @Input() fields: FormField[] = [];
  @Output() formSubmit = new EventEmitter<any>();
  @Output() salirpop = new EventEmitter<boolean>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    const group: any = {};
    
    this.fields.forEach(field => {
      group[field.key] = '';
    });

    this.form = this.fb.group(group);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }

  resetForm() {
    this.form.reset();
  }

  salir() {
    this.form.reset(); 
    this.salirpop.emit(true)
  }
}
