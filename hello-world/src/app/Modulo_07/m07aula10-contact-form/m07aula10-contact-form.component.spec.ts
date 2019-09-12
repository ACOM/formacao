import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M07aula10ContactFormComponent } from './m07aula10-contact-form.component';

describe('M07aula10ContactFormComponent', () => {
  let component: M07aula10ContactFormComponent;
  let fixture: ComponentFixture<M07aula10ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M07aula10ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M07aula10ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
