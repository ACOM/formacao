import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M09aula13PostsComponent } from './m09aula13-posts.component';

describe('M09aula13PostsComponent', () => {
  let component: M09aula13PostsComponent;
  let fixture: ComponentFixture<M09aula13PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M09aula13PostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M09aula13PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
