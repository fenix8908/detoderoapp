import { Cliente} from '../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cliente_lista.component.html',
  styleUrl: './cliente_lista.component.css',
})
export class ClienteComponent implements OnInit {
  clienteResponse: Cliente[] = [];
  constructor(private clienteService: ClienteService,private router:Router) {}

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
        if(err.status == 401){
          console.log(err);
          this.router.navigateByUrl('/login')
        }
      }
    });
  }
}
