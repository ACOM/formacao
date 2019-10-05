import { TestBed } from '@angular/core/testing';

import { M09aula11PostService } from './m09aula11-post.service';

describe('M09aula11PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: M09aula11PostService = TestBed.get(M09aula11PostService);
    expect(service).toBeTruthy();
  });
});
