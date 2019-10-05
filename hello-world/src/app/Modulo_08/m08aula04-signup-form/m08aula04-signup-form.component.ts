import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'm08aula04-signup-form',
  templateUrl: './m08aula04-signup-form.component.html',
  styleUrls: ['./m08aula04-signup-form.component.css']
})
export class M08aula04SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  get username(){
    return this.form.get('username');
  }
}
