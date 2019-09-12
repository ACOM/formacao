import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm07aula09-contact-form',
  templateUrl: './m07aula09-contact-form.component.html',
  styleUrls: ['./m07aula09-contact-form.component.css']
})
export class M07aula09ContactFormComponent {
  log(x){
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }
}
