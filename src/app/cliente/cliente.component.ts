import { Cliente} from './../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent implements OnInit {
  clienteResponse: Cliente[] = [];
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.consultarClientes();
  }

  consultarClientes(){
    this.clienteService.obtenerClientes().subscribe({
      next: (respuesta) => {
        respuesta.forEach((e,i) => {
          const cliente = new Cliente(
            e.id,
            e.nombre,
            e.apellido,
            e.email,
            e.telefono,
            e.direccion,
            e.fechaRegistro
          );
          this.clienteResponse[i] = cliente;
        });
        return this.clienteResponse;
      },
      error: (err) => {
        console.log(err);
        return [];
      }
    });
  }
}
