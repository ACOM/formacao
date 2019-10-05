
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
import { M09aula03PostsComponent } from './Modulo_09/m09aula03-posts/m09aula03-posts.component';
import { HttpModule } from '@angular/http';
import { M09aula04PostsComponent } from './Modulo_09/m09aula04-posts/m09aula04-posts.component';
import { M09aula05PostsComponent } from './Modulo_09/m09aula05-posts/m09aula05-posts.component';
import { M09aula06PostsComponent } from './Modulo_09/m09aula06-posts/m09aula06-posts.component';
import { M09aula07PostsComponent } from './Modulo_09/m09aula07-posts/m09aula07-posts.component';
import { M09aula09PostService } from './services/m09aula09-post.service';
import { M09aula09PostsComponent } from './Modulo_09/m09aula09-posts/m09aula09-posts.component';
import { M09aula11PostService } from './services/m09aula11-post.service';
import { M09aula11PostsComponent } from './Modulo_09/m09aula11-posts/m09aula11-posts.component';
import { M09aula12PostService } from './services/m09aula12-post.service';
import { M09aula12PostsComponent } from './Modulo_09/m09aula12-posts/m09aula12-posts.component';
import { M09aula13PostService } from './services/m09aula13-post.service';
import { M09aula13PostsComponent } from './Modulo_09/m09aula13-posts/m09aula13-posts.component';


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
    M09aula03PostsComponent,
    M09aula04PostsComponent,
    M09aula05PostsComponent,
    M09aula06PostsComponent,
    M09aula07PostsComponent,
    M09aula09PostsComponent,
    M09aula11PostsComponent,
    M09aula12PostsComponent,
    M09aula13PostsComponent,

  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    ReactiveFormsModule, //M08Aula03
    HttpModule
  ],
  providers: [
    CousesService,
    M09aula09PostService,
    M09aula11PostService,
    M09aula12PostService,
    M09aula13PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
