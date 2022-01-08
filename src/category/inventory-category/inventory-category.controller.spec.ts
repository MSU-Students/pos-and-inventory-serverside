import { Test, TestingModule } from '@nestjs/testing';
import { InventoryCategoryController } from './inventory-category.controller';

describe('InventoryCategoryController', () => {
  let controller: InventoryCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryCategoryController],
    }).compile();

    controller = module.get<InventoryCategoryController>(InventoryCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
