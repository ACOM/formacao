import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M09aula03PostsComponent } from './m09aula03-posts.component';

describe('M09aula03PostsComponent', () => {
  let component: M09aula03PostsComponent;
  let fixture: ComponentFixture<M09aula03PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M09aula03PostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M09aula03PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
