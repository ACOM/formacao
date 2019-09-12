import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula08ContactFormComponent } from './m07aula08-contact-form.component';

describe('M07aula08ContactFormComponent', () => {
  let component: M07aula08ContactFormComponent;
  let fixture: ComponentFixture<M07aula08ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula08ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula08ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
