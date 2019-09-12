import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm07aula12-contact-form',
  templateUrl: './m07aula12-contact-form.component.html',
  styleUrls: ['./m07aula12-contact-form.component.css']
})
export class M07aula12ContactFormComponent {
  log(x){
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }

}
