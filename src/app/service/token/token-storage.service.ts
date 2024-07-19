import { Injectable } from '@angular/core';
import { jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  public obtenerUserDelToken():string | null {
    const decodeToken = this.decodificarToker();
    if(decodeToken){
      return decodeToken['sub'];
    }else{
      return null;
    }
  }

  public decodificarToker(): any {
    const token = this.obtenerTokenLocalStorage();
    if (token) {
      return jwtDecode(token);
    } else {
      return null;
    }
  }

  public obtenerTokenLocalStorage(): string | null {
    return localStorage.getItem('jwtToken');
  }

}
