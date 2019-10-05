import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { m08aula06UsernameValidators } from './m08aula06-username.validators';

@Component({
  selector: 'm08aula09-signup-form',
  templateUrl: './m08aula09-signup-form.component.html',
  styleUrls: ['./m08aula09-signup-form.component.css']
})
export class M08aula09SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', 
      Validators.required, 
      m08aula06UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  })
  get username(){
    return this.form.get('username');
  }

}
