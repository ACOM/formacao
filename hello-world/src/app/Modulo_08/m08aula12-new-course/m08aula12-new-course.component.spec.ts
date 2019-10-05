import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula12NewCourseComponent } from './m08aula12-new-course.component';

describe('M08aula12NewCourseComponent', () => {
  let component: M08aula12NewCourseComponent;
  let fixture: ComponentFixture<M08aula12NewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula12NewCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula12NewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
