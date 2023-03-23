import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
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

  constructor(private loginServise: LoginRegisterService, private formBuilder: FormBuilder, private router: Router) {
    this.stayLoggedIn = false;
    this.userToLogin = new User();

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
      this.loginServise
        .loginUser(this.userToLogin)
        .subscribe({
          next: (data) => {
            this.router.navigate(["join-or-create"]);
          },
          error: err => console.log(`Error is here: ${JSON.stringify(err.error)}`),
        }
        )
    }


  }
  handleCheck(e: any) {
    this.stayLoggedIn = e.target.checked;
  }
}
