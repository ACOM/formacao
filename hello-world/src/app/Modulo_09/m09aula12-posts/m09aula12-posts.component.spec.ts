import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M09aula12PostsComponent } from './m09aula12-posts.component';

describe('M09aula12PostsComponent', () => {
  let component: M09aula12PostsComponent;
  let fixture: ComponentFixture<M09aula12PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M09aula12PostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M09aula12PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
