import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula14ContactFormComponent } from './m07aula14-contact-form.component';

describe('M07aula14ContactFormComponent', () => {
  let component: M07aula14ContactFormComponent;
  let fixture: ComponentFixture<M07aula14ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula14ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula14ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
