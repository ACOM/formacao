import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula09SignupFormComponent } from './m08aula09-signup-form.component';

describe('M08aula09SignupFormComponent', () => {
  let component: M08aula09SignupFormComponent;
  let fixture: ComponentFixture<M08aula09SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula09SignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula09SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
