import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-register',
  templateUrl: './formulario-register.component.html',
  styleUrls: ['./formulario-register.component.css']
})
export class FormularioRegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor(private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  register(): void {
    if (this.registerForm.invalid) return;

    const { email, password, confirmPassword } = this.registerForm.value;
    if (password !== confirmPassword) {
      return;
    }

    // Falta implementar REGISTRO
  }

}
