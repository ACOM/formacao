import { TestBed } from '@angular/core/testing';

import { M09aula09PostService } from './m09aula09-post.service';

describe('M09aula09PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: M09aula09PostService = TestBed.get(M09aula09PostService);
    expect(service).toBeTruthy();
  });
});
