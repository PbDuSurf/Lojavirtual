import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  router: any;


  constructor(private fb:FormBuilder, private loginService: LoginService, router: Router) { }
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(5)]],
  });

  loginEmail: string = '';
  loginSenha: string = '';

  //#region getters
  get email () {
    return this.loginForm.get('email');
  }

  get senha () {
    return this.loginForm.get('senha');
  }
  //#endregion

  onSubmit() {
    if(this.loginService.buscaLogin(this.loginEmail)){
      if(this.loginService.comparaSenha(this.loginSenha)){
        alert(`Login realizado com sucesso!`);
   
      }else{
        alert(`Senha inválida`);
      }
    }else{
      alert(`Usuário inexistente!`);
    }
  }

  ngOnInit(): void {
  }

}
