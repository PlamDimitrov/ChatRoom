import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatRoom } from 'src/app/core/models/ChatRoom';
import { ApiService } from 'src/app/core/services/api.service';
import { LoginRegisterValidator } from '../../shared/validators/login-register';

@Component({
  selector: 'app-join-or-create',
  templateUrl: './join-or-create.component.html',
  styleUrls: ['./join-or-create.component.scss']
})
export class JoinOrCreateComponent {
  public joinForm: FormGroup;
  public createForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) {
    const userValidator = new LoginRegisterValidator();

    this.joinForm = formBuilder.group({
      chatroomName: ['', [userValidator.userRegex, Validators.required]],
    })
    this.createForm = formBuilder.group({
      chatroomName: ['', [userValidator.userRegex, Validators.required]],
    })
  }

  handleJoinFormSubmit() {

  }

  handleCreateFormSubmit() {
    this.router.navigate([`/chatroom/${this.createForm.value.chatroomName}`])
  }

}
