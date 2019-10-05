import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M09aula09PostsComponent } from './m09aula09-posts.component';

describe('M09aula09PostsComponent', () => {
  let component: M09aula09PostsComponent;
  let fixture: ComponentFixture<M09aula09PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M09aula09PostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M09aula09PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
