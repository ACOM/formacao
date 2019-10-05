import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula03SignupFormComponent } from './m08aula03-signup-form.component';

describe('M08aula03SignupFormComponent', () => {
  let component: M08aula03SignupFormComponent;
  let fixture: ComponentFixture<M08aula03SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula03SignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula03SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
