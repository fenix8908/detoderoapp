import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy, signal} from '@angular/core'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrearClienteComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();


}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
