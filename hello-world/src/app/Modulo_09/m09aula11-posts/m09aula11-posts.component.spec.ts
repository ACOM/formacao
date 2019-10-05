import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M09aula11PostsComponent } from './m09aula11-posts.component';

describe('M09aula11PostsComponent', () => {
  let component: M09aula11PostsComponent;
  let fixture: ComponentFixture<M09aula11PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M09aula11PostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M09aula11PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
