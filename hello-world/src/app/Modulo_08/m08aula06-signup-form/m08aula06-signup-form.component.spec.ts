import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula06SignupFormComponent } from './m08aula06-signup-form.component';

describe('M08aula06SignupFormComponent', () => {
  let component: M08aula06SignupFormComponent;
  let fixture: ComponentFixture<M08aula06SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula06SignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula06SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
