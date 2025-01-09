import { TestBed } from '@angular/core/testing';

import { ProductWarehouseService } from './product-warehouse.service';

describe('ProductWarehouseService', () => {
  let service: ProductWarehouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductWarehouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
