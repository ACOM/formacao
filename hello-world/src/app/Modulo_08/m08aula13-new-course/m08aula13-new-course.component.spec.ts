import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula13NewCourseComponent } from './m08aula13-new-course.component';

describe('M08aula13NewCourseComponent', () => {
  let component: M08aula13NewCourseComponent;
  let fixture: ComponentFixture<M08aula13NewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula13NewCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula13NewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
