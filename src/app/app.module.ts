import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './components/login/login.component';
import { VenderComponent } from './components/vender/vender.component';
import { NegociarComponent } from './components/negociar/negociar.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NaoEncontradoComponent } from './components/nao-encontrador/nao-encontrado/nao-encontrado.component';
import { TenhoInteresseComponent } from './components/tenho-interesse/tenho-interesse.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { LoginService } from './shared/services/login/login.service';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ComprarComponent,
    CadastroComponent,
    LoginComponent,
    VenderComponent,
    FeedbackComponent,
    NegociarComponent,
    ProdutoComponent,
    NaoEncontradoComponent,
    TenhoInteresseComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    [LoginService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
