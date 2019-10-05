import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula05SignupFormComponent } from './m08aula05-signup-form.component';

describe('M08aula05SignupFormComponent', () => {
  let component: M08aula05SignupFormComponent;
  let fixture: ComponentFixture<M08aula05SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula05SignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula05SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
