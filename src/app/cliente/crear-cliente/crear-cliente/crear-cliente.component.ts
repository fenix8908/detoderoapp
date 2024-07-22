import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy, signal} from '@angular/core'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrearClienteComponent {
[x: string]: any;

  clienteForm!: FormGroup;

  constructor(){
    this.clienteForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nombre :new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required])
    });
  }

  pintarDatosFormmulario(){
    console.log(this.clienteForm.value);
  }

}
