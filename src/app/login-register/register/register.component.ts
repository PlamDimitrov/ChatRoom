import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormBuilder, AbstractControlOptions } from '@angular/forms';
import { User } from 'src/app/core/models/User';
import { LoginRegisterService } from '../register.service';
import { LoginRegisterValidator } from 'src/app/shared/validators/login-register';
import { IUser } from 'src/app/core/interfaces/IUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm: FormGroup;
  private thermsAndConditions: Boolean;
  private userToRegister: User;
  private apiRegisterCall: any;

  constructor(private registerService: LoginRegisterService, private formBuilder: FormBuilder) {
    this.thermsAndConditions = false;
    this.userToRegister = new User();
    this.apiRegisterCall = registerService.registerUser(this.userToRegister);

    const userValidator = new LoginRegisterValidator();


    this.registerForm = formBuilder.group({
      username: ['', [userValidator.userRegex, Validators.required]],
      userEmail: ['', [userValidator.emailRegex, Validators.required]],
      passwords: formBuilder.group({
        password: ['', [userValidator.passwordRegex, Validators.required]],
        repeatePassword: ['', [Validators.required]],
      }, { validator: [userValidator.matchPasswords] } as AbstractControlOptions),
    })
  }

  handleFormSubmit() {
    if (this.registerForm.valid && this.thermsAndConditions) {
      this.userToRegister.username = this.registerForm.value.username;
      this.userToRegister.email = this.registerForm.value.userEmail;
      this.userToRegister.password = this.registerForm.value.passwords.password;
      this.apiRegisterCall.subscribe();
    } else {
      console.log(this.registerForm.get("thermsAndConditions"));
    }
  }

  handleCheck(e: any) {
    this.thermsAndConditions = e.target.checked;
  }
}