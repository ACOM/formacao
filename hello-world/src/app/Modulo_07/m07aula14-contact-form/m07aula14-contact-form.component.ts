import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm07aula14-contact-form',
  templateUrl: './m07aula14-contact-form.component.html',
  styleUrls: ['./m07aula14-contact-form.component.css']
})
export class M07aula14ContactFormComponent {
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
