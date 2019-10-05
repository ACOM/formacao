import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'm08aula03-signup-form',
  templateUrl: './m08aula03-signup-form.component.html',
  styleUrls: ['./m08aula03-signup-form.component.css']
})
export class M08aula03SignupFormComponent {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

}
