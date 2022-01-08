import { Test, TestingModule } from '@nestjs/testing';
import { SubprodCategoryController } from './subprod-category.controller';

describe('SubprodCategoryController', () => {
  let controller: SubprodCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubprodCategoryController],
    }).compile();

    controller = module.get<SubprodCategoryController>(SubprodCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
