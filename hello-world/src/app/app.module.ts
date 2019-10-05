import { SummaryPipe } from './summary.pipe';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './course/course.component';
import { CousesService } from './couses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Aula03Component } from './Modulo_05/aula03/aula03.component';

// import { MatIconModule } from '@angular/material/icon';
import {MatIconModule} from '@angular/material';
import { M07aula02ContactFormComponent } from './Modulo_07/m07aula02-contact-form/m07aula02-contact-form.component';
import { M07aula04ContactFormComponent } from './Modulo_07/m07aula04-contact-form/m07aula04-contact-form.component';
import { M07aula05ContactFormComponent } from './Modulo_07/m07aula05-contact-form/m07aula05-contact-form.component';
import { M07aula06ContactFormComponent } from './Modulo_07/m07aula06-contact-form/m07aula06-contact-form.component';
import { M07aula08ContactFormComponent } from './Modulo_07/m07aula08-contact-form/m07aula08-contact-form.component';
import { M07aula09ContactFormComponent } from './Modulo_07/m07aula09-contact-form/m07aula09-contact-form.component';
import { M07aula10ContactFormComponent } from './Modulo_07/m07aula10-contact-form/m07aula10-contact-form.component';
import { M07aula12ContactFormComponent } from './Modulo_07/m07aula12-contact-form/m07aula12-contact-form.component';
import { M07aula13ContactFormComponent } from './Modulo_07/m07aula13-contact-form/m07aula13-contact-form.component';
import { M07aula14ContactFormComponent } from './Modulo_07/m07aula14-contact-form/m07aula14-contact-form.component';
import { M07aula15ContactFormComponent } from './Modulo_07/m07aula15-contact-form/m07aula15-contact-form.component';
import { M08aula02SignupFormComponent } from './Modulo_08/m08aula02-signup-form/m08aula02-signup-form.component';
import { M08aula03SignupFormComponent } from './Modulo_08/m08aula03-signup-form/m08aula03-signup-form.component';
import { M08aula04SignupFormComponent } from './Modulo_08/m08aula04-signup-form/m08aula04-signup-form.component';
import { M08aula05SignupFormComponent } from './Modulo_08/m08aula05-signup-form/m08aula05-signup-form.component';
import { M08aula06SignupFormComponent } from './Modulo_08/m08aula06-signup-form/m08aula06-signup-form.component';
import { M08aula07SignupFormComponent } from './Modulo_08/m08aula07-signup-form/m08aula07-signup-form.component';
import { M08aula08SignupFormComponent } from './Modulo_08/m08aula08-signup-form/m08aula08-signup-form.component';
import { M08aula09SignupFormComponent } from './Modulo_08/m08aula09-signup-form/m08aula09-signup-form.component';
import { M08aula10SignupFormComponent } from './Modulo_08/m08aula10-signup-form/m08aula10-signup-form.component';
import { M08aula11SignupFormComponent } from './Modulo_08/m08aula11-signup-form/m08aula11-signup-form.component';
import { M08aula12NewCourseComponent } from './Modulo_08/m08aula12-new-course/m08aula12-new-course.component';
import { M08aula13NewCourseComponent } from './Modulo_08/m08aula13-new-course/m08aula13-new-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    Aula03Component,
    M07aula02ContactFormComponent,
    M07aula04ContactFormComponent,
    M07aula05ContactFormComponent,
    M07aula06ContactFormComponent,
    M07aula08ContactFormComponent,
    M07aula09ContactFormComponent,
    M07aula10ContactFormComponent,
    M07aula12ContactFormComponent,
    M07aula13ContactFormComponent,
    M07aula14ContactFormComponent,
    M07aula15ContactFormComponent,
    M08aula02SignupFormComponent,
    M08aula03SignupFormComponent,
    M08aula04SignupFormComponent,
    M08aula05SignupFormComponent,
    M08aula06SignupFormComponent,
    M08aula07SignupFormComponent,
    M08aula08SignupFormComponent,
    M08aula09SignupFormComponent,
    M08aula10SignupFormComponent,
    M08aula11SignupFormComponent,
    M08aula12NewCourseComponent,
    M08aula13NewCourseComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    ReactiveFormsModule, //M08Aula03
  ],
  providers: [
    CousesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
