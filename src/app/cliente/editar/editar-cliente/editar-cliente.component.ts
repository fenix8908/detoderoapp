import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../service/cliente/cliente.service';
import { HomeComponent } from '../../../home/home/home.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cliente',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatIconModule,
    MatButtonModule,
    HomeComponent
],
  templateUrl: './editar-cliente.component.html',
  styleUrl: './editar-cliente.component.css',
})
export class EditarClienteComponent implements OnInit {
  editForm: FormGroup;
  idCliente!: number;

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {
    this.editForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: [''],
    });
  }

  ngOnInit(): void {
    this.obtenerDatosCliente();
  }

  public obtenerDatosCliente() {
    this.idCliente = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    if (this.idCliente) {
      this.clienteService.buscarClientePorId(this.idCliente).subscribe({
        next: (data) => {
          this.editForm.setValue({
            email: data.email,
            nombre: data.nombre,
            telefono: data.telefono,
            apellido: data.apellido,
            direccion: data.direccion,
          });
        },
        error: (err) => {},
      });
    }
  }

  actualizarClieente() {
    if (this.editForm.valid) {
      this.clienteService
        .editarCliente(this.editForm.value, this.idCliente)
        .subscribe({
          next: (res) => {
            Swal.fire({
              title: "Cliente actualizado!",
              text: "presiona el boton para continuar!",
              icon: "success"
            });
            this.router.navigateByUrl('/clientes')
          },
          error: (err) => {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: err.error
            });
          },
        });
    }
  }
}
