import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PontosService } from './pontos.service';

describe('PontosService', () => {
  let service: PontosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PontosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
