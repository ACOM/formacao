import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M09aula04PostsComponent } from './m09aula04-posts.component';

describe('M09aula04PostsComponent', () => {
  let component: M09aula04PostsComponent;
  let fixture: ComponentFixture<M09aula04PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M09aula04PostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M09aula04PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
