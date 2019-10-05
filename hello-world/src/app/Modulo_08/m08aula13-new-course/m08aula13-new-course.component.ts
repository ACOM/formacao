import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm08aula13-new-course',
  templateUrl: './m08aula13-new-course.component.html',
  styleUrls: ['./m08aula13-new-course.component.css']
})
export class M08aula13NewCourseComponent {
  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }
}
