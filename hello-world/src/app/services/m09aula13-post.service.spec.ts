import { TestBed } from '@angular/core/testing';

import { M09aula13PostService } from './m09aula13-post.service';

describe('M09aula13PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: M09aula13PostService = TestBed.get(M09aula13PostService);
    expect(service).toBeTruthy();
  });
});
