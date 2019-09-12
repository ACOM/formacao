import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula02ContactFormComponent } from './m07aula02-contact-form.component';

describe('M07aula02ContactFormComponent', () => {
  let component: M07aula02ContactFormComponent;
  let fixture: ComponentFixture<M07aula02ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula02ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula02ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
