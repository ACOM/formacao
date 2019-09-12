import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula13ContactFormComponent } from './m07aula13-contact-form.component';

describe('M07aula13ContactFormComponent', () => {
  let component: M07aula13ContactFormComponent;
  let fixture: ComponentFixture<M07aula13ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula13ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula13ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
