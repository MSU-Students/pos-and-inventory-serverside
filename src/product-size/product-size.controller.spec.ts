import { Test, TestingModule } from '@nestjs/testing';
import { ProductSizeController } from './product-size.controller';

describe('ProductSizeController', () => {
  let controller: ProductSizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductSizeController],
    }).compile();

    controller = module.get<ProductSizeController>(ProductSizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
