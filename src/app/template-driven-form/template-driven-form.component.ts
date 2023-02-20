import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  @ViewChild('templateDrivenForm') userForm!: NgForm

  handleSubmit(data: string) {
    console.log(this.userForm.valid);
  }
}
