import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula04SignupFormComponent } from './m08aula04-signup-form.component';

describe('M08aula04SignupFormComponent', () => {
  let component: M08aula04SignupFormComponent;
  let fixture: ComponentFixture<M08aula04SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula04SignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula04SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
