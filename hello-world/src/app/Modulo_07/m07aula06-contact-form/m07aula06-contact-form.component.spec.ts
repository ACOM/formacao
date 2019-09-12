import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula06ContactFormComponent } from './m07aula06-contact-form.component';

describe('M07aula06ContactFormComponent', () => {
  let component: M07aula06ContactFormComponent;
  let fixture: ComponentFixture<M07aula06ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula06ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula06ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
