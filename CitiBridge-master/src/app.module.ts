import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserstockComponent } from './userstock/userstock.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    UserstockComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
