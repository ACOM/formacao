import { TestBed } from '@angular/core/testing';

import { M09aula12PostService } from './m09aula12-post.service';

describe('M09aula12PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: M09aula12PostService = TestBed.get(M09aula12PostService);
    expect(service).toBeTruthy();
  });
});
