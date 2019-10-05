import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula07SignupFormComponent } from './m08aula07-signup-form.component';

describe('M08aula07SignupFormComponent', () => {
  let component: M08aula07SignupFormComponent;
  let fixture: ComponentFixture<M08aula07SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula07SignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula07SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
