import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M09aula06PostsComponent } from './m09aula06-posts.component';

describe('M09aula06PostsComponent', () => {
  let component: M09aula06PostsComponent;
  let fixture: ComponentFixture<M09aula06PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M09aula06PostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M09aula06PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
