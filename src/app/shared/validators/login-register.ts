import { AbstractControl } from '@angular/forms';

export class LoginRegisterValidator {
  public userRegex = (c: AbstractControl) => {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    return usernameRegex.test(c.value) ? null : { userRegex: true };
  }
  public passwordRegex = (c: AbstractControl) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(c.value) ? null : { userRegex: true };
  }

  public emailRegex = (c: AbstractControl) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(c.value) ? null : { userRegex: true };
  }

  public matchPasswords = (c: AbstractControl) => {
    const password = c.get('password')?.value;
    const confirmPassword = c.get('repeatePassword')?.value;
    return password === confirmPassword ? null : { matchPasswords: true };
  }
  static userRegex: any | string;
}