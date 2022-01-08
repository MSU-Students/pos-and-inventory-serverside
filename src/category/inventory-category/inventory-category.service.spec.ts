import { Test, TestingModule } from '@nestjs/testing';
import { InventoryCategoryService } from './inventory-category.service';

describe('InventoryCategoryService', () => {
  let service: InventoryCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryCategoryService],
    }).compile();

    service = module.get<InventoryCategoryService>(InventoryCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
