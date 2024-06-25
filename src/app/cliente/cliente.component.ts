import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent implements OnInit {
  clienteResponse!: Cliente;
  constructor(private clienteService: ClienteService) {}


  ngOnInit(): void {
    this.consultarClientes();
  }

  consultarClientes() {
    this.clienteService.obtenerClientes().subscribe({
      next: (respuesta) => {
        this.clienteResponse = respuesta;
        console.log(this.clienteResponse)
      },
      error: (err) => {console.log(err)},
      complete: () => {console.log('Proceso terminado con exito')},
    });
  }
}
