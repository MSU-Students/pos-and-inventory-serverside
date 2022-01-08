import { Test, TestingModule } from '@nestjs/testing';
import { ProdCategoryService } from './prod-category.service';

describe('ProdCategoryService', () => {
  let service: ProdCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdCategoryService],
    }).compile();

    service = module.get<ProdCategoryService>(ProdCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
