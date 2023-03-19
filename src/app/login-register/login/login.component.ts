import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/User';
import { LoginRegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  private stayLoggedIn: Boolean;
  private userToLogin: User;
  private apiLoginCall: any;

  constructor(private loginServise: LoginRegisterService, private formBuilder: FormBuilder) {
    this.stayLoggedIn = false;
    this.userToLogin = new User();
    this.apiLoginCall = loginServise.loginUser(this.userToLogin);

    this.loginForm = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })

  }

  handleFormSubmit() {
    if (this.loginForm.valid) {
      this.userToLogin.username = this.loginForm.value.username;
      this.userToLogin.password = this.loginForm.value.password;
      this.userToLogin.stayLoggedIn = this.stayLoggedIn;
      this.apiLoginCall.subscribe();
    } else {
      console.log(this.loginForm.get("thermsAndConditions"));
    }
  }

  handleCheck(e: any) {
    this.stayLoggedIn = e.target.checked;
  }
}
