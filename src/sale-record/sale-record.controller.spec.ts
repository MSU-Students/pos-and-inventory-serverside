import { Test, TestingModule } from '@nestjs/testing';
import { SaleRecordController } from './sale-record.controller';

describe('SaleRecordController', () => {
  let controller: SaleRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleRecordController],
    }).compile();

    controller = module.get<SaleRecordController>(SaleRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
