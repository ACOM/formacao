import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M09aula05PostsComponent } from './m09aula05-posts.component';

describe('M09aula05PostsComponent', () => {
  let component: M09aula05PostsComponent;
  let fixture: ComponentFixture<M09aula05PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M09aula05PostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M09aula05PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
