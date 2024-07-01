import { LoginResponse } from './../models/login-response';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../service/login.service';
import { LoginRequest } from '../models/login-request';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginRequest:LoginRequest = new LoginRequest();
  loginResponse!:LoginResponse;
  loginForm!: FormGroup;
  usuario!: string;
  contrasena!: string;


  constructor(private loginService: LoginService) {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }


  get f() {
    return this.loginForm.controls;
  }

  autenticar() {
    if (this.loginForm.valid) {
      this.usuario = this.loginForm.get('usuario')?.value;
      this.contrasena = this.loginForm.get('password')?.value;

      this.loginRequest.usuario = this.usuario;
      this.loginRequest.contraseña = this.contrasena;

      this.loginService.login(this.loginRequest).subscribe({
        next: response => {
          this.loginResponse = response;
          localStorage.setItem('jwtToken', this.loginResponse.tokenResponse);
          localStorage.setItem('jwtTokenRefresh', this.loginResponse.refreshToken);
          localStorage.setItem('roles',JSON.stringify(this.loginResponse.roles))
          console.log('Respuesta:', response);
        },
        error: err => {
          console.log('Error:', err.error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.error,
          });
        },
        complete: () => {
          console.log('Proceso completado');
        }
      });
    }
  }

}
