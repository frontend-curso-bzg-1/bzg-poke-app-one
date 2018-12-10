import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ILogin } from '../../models/interfaces/auth';
import { Login } from '../../models/classes/auth';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() submitted = new EventEmitter();
  @Output() signByGoogle = new EventEmitter<boolean>();

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['',Validators.required]
  });

  login : ILogin;

  constructor(private fb: FormBuilder) {
    this.login = new Login();
   }

  ngOnInit() {
  }

  submit() {
    this.submitted.emit(this.loginForm.value);
  }

  signGoogle(){
    this.signByGoogle.emit(true);
  }

}
