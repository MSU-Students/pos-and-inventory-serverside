import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesCategoryService } from './expenses-category.service';

describe('ExpensesCategoryService', () => {
  let service: ExpensesCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpensesCategoryService],
    }).compile();

    service = module.get<ExpensesCategoryService>(ExpensesCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
