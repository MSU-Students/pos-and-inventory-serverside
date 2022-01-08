import { Test, TestingModule } from '@nestjs/testing';
import { SubprodCategoryService } from './subprod-category.service';

describe('SubprodCategoryService', () => {
  let service: SubprodCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubprodCategoryService],
    }).compile();

    service = module.get<SubprodCategoryService>(SubprodCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
