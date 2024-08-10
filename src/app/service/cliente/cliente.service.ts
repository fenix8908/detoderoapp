import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  baseUrl = 'http://localhost:8080/clientes';
  constructor(private http: HttpClient) {}

  public obtenerClientes(): Observable<Cliente[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<Cliente[]>(this.baseUrl + '/listado', { headers });
  }

  public crearCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/crear', cliente);
  }

  public editarCliente(cliente: Cliente): Observable<any> {
    return this.http.put<any>(this.baseUrl + `/editar/${cliente.id}`, cliente);
  }
  public buscarClientePorId(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/buscar/${id}`);
  }
}
