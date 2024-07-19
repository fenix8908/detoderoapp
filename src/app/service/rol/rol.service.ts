import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  urlServicio: string = 'http://localhost:8080/roles/por-usuario/';
  constructor(private http: HttpClient) { }

  public obtenerRolesPorUsuario(usuario:string):Observable<string[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<string[]>(this.urlServicio + `${usuario}`,{headers})
  }
}
