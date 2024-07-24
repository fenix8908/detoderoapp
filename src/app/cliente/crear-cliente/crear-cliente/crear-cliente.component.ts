import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ClienteService } from '../../../service/cliente/cliente.service';
import { Cliente } from '../../../models/cliente';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrearClienteComponent {
  [x: string]: any;
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    fechaRegistro: '',
  };

  clienteForm!: FormGroup;

  constructor(private clienteService: ClienteService, private router: Router) {
    this.clienteForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      direccion: new FormControl('', []),
    });
  }

  public guardarCliente(): any {
    this.cliente.nombre = this.clienteForm.controls['nombre'].value;
    this.cliente.apellido = this.clienteForm.controls['apellido'].value;
    this.cliente.email = this.clienteForm.controls['email'].value;
    this.cliente.telefono = this.clienteForm.controls['telefono'].value;
    this.cliente.direccion = this.clienteForm.controls['direccion'].value;
    Swal.fire({
      title: 'Deseas guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.crearCliente(this.cliente).subscribe({
          next: (response) => {
            if (response) {
              Swal.fire('cliente creado!', '', 'success');
              this.router.navigateByUrl('/clientes')
            }
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err,
            });
          },
        });
      } else if (result.isDenied) {
        Swal.fire('el cliente no fue creado', '', 'info');
      }
    });
  }

  validarCreacion() {}
}
