import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M09aula07PostsComponent } from './m09aula07-posts.component';

describe('M09aula07PostsComponent', () => {
  let component: M09aula07PostsComponent;
  let fixture: ComponentFixture<M09aula07PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M09aula07PostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M09aula07PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
