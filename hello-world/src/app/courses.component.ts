import { CousesService } from './couses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `
       {{ text | summary:15 }} 
    `
})
export class CoursesComponent {
    text = `
    Lorem Ipsum is simply dummy text of the printing and types
    `

}