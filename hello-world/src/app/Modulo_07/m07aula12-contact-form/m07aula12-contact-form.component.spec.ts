import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula12ContactFormComponent } from './m07aula12-contact-form.component';

describe('M07aula12ContactFormComponent', () => {
  let component: M07aula12ContactFormComponent;
  let fixture: ComponentFixture<M07aula12ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula12ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula12ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
