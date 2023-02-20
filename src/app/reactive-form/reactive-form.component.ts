import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const userRegex = (c: AbstractControl) => {
  const usernameRegex = /^[A-Z].*[0-9].*[^a-zA-Z0-9].*$/;
  return usernameRegex.test(c.value) ? null : { userRegex: true };
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      userFormGroup: formBuilder.group({
        username: ['', [Validators.required]],
        userEmail: ['', [Validators.required]],
      }),
      anotherFormGroup: formBuilder.group({
        anotherName: ['', [userRegex, Validators.required]],
        anotherEmail: ['', [Validators.required]],
      })
    })
  }


  handleSubmit() {
    console.log(this.userForm);
  }
}
