import { TestBed } from '@angular/core/testing';
import { ContentService } from './content'; // CAMBIO: Importamos ContentService en lugar de Content

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentService]
    });
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});