import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterModule } from './login-register/login-register.module';
import { ApiService } from './core/services/api.service';
import { JoinOrCreateComponent } from './join-or-create/join-or-create/join-or-create.component';
import { LoggedInUserGuard } from './core/guards/logged-in-user.guard';

@NgModule({
  declarations: [
    AppComponent,
    JoinOrCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRegisterModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    LoggedInUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
