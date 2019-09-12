import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula09ContactFormComponent } from './m07aula09-contact-form.component';

describe('M07aula09ContactFormComponent', () => {
  let component: M07aula09ContactFormComponent;
  let fixture: ComponentFixture<M07aula09ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula09ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula09ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
