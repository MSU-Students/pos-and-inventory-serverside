import { Test, TestingModule } from '@nestjs/testing';
import { ProductSizeService } from './product-size.service';

describe('ProductSizeService', () => {
  let service: ProductSizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSizeService],
    }).compile();

    service = module.get<ProductSizeService>(ProductSizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
