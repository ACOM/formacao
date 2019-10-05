import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'm08aula05-signup-form',
  templateUrl: './m08aula05-signup-form.component.html',
  styleUrls: ['./m08aula05-signup-form.component.css']
})
export class M08aula05SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    password: new FormControl('', Validators.required)
  })
  get username(){
    return this.form.get('username');
  }
}
