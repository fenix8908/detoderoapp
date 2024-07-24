import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  urlServicio: string = 'http://localhost:8080/clientes/listado';
  urlCrearCliente: string = 'http://localhost:8080/clientes/crear';
  constructor(private http: HttpClient) {}

  public obtenerClientes(): Observable<Cliente[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<Cliente[]>(this.urlServicio, { headers });
  }

  public crearCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.urlCrearCliente, cliente);
  }
}
