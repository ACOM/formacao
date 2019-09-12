import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm07aula13-contact-form',
  templateUrl: './m07aula13-contact-form.component.html',
  styleUrls: ['./m07aula13-contact-form.component.css']
})
export class M07aula13ContactFormComponent {
  log(x){
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }


}
