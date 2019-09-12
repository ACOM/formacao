import { SummaryPipe } from './summary.pipe';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [
    CousesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
