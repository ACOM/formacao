import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M08aula10SignupFormComponent } from './m08aula10-signup-form.component';

describe('M08aula10SignupFormComponent', () => {
  let component: M08aula10SignupFormComponent;
  let fixture: ComponentFixture<M08aula10SignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M08aula10SignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M08aula10SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
