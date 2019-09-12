import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm07aula15-contact-form',
  templateUrl: './m07aula15-contact-form.component.html',
  styleUrls: ['./m07aula15-contact-form.component.css']
})
export class M07aula15ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'}
  ];
  log(x){
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }

}
