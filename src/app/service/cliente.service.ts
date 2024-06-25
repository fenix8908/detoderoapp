import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  urlServicio: string = 'http://localhost:8080/clientes/listado';
  constructor(private http: HttpClient) {}

  obtenerClientes(): Observable<Cliente> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<Cliente>(this.urlServicio, { headers });
  }
}
