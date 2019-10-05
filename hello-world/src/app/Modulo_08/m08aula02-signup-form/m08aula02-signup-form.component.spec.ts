import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula02SignupFormComponent } from './m08aula02-signup-form.component';

describe('M08aula02SignupFormComponent', () => {
  let component: M08aula02SignupFormComponent;
  let fixture: ComponentFixture<M08aula02SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula02SignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula02SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
