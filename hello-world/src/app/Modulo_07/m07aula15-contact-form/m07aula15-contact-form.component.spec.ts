import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula15ContactFormComponent } from './m07aula15-contact-form.component';

describe('M07aula15ContactFormComponent', () => {
  let component: M07aula15ContactFormComponent;
  let fixture: ComponentFixture<M07aula15ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula15ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula15ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
