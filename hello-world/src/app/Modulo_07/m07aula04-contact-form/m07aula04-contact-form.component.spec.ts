import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula04ContactFormComponent } from './m07aula04-contact-form.component';

describe('M07aula04ContactFormComponent', () => {
  let component: M07aula04ContactFormComponent;
  let fixture: ComponentFixture<M07aula04ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula04ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula04ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
