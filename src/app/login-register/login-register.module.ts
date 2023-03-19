import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRegisterComponent } from './login-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterHeaderComponent } from './login-register-header/login-register-header.component';
import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginRegisterService } from './register.service';


@NgModule({
  declarations: [
    LoginRegisterComponent,
    LoginComponent,
    RegisterComponent,
    LoginRegisterHeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRegisterRoutingModule,
  ],
  providers: [
    LoginRegisterService
  ],
  exports: [
    LoginRegisterRoutingModule
  ]
})
export class LoginRegisterModule { }
