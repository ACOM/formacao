import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula11SignupFormComponent } from './m08aula11-signup-form.component';

describe('M08aula11SignupFormComponent', () => {
  let component: M08aula11SignupFormComponent;
  let fixture: ComponentFixture<M08aula11SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula11SignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula11SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
