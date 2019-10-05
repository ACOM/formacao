import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula08SignupFormComponent } from './m08aula08-signup-form.component';

describe('M08aula08SignupFormComponent', () => {
  let component: M08aula08SignupFormComponent;
  let fixture: ComponentFixture<M08aula08SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula08SignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula08SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
