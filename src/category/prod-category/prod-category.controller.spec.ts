import { Test, TestingModule } from '@nestjs/testing';
import { ProdCategoryController } from './prod-category.controller';

describe('ProdCategoryController', () => {
  let controller: ProdCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdCategoryController],
    }).compile();

    controller = module.get<ProdCategoryController>(ProdCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
