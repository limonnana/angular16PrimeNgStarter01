import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    UsersComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
   
  ],
  exports:[
    UsersComponent,
    RegisterComponent,
    LoginComponent
  ]
})
export class UsersModule { }
