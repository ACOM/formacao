import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula05ContactFormComponent } from './m07aula05-contact-form.component';

describe('M07aula05ContactFormComponent', () => {
  let component: M07aula05ContactFormComponent;
  let fixture: ComponentFixture<M07aula05ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula05ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula05ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
