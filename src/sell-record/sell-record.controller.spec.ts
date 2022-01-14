import { Test, TestingModule } from '@nestjs/testing';
import { SellRecordController } from './sell-record.controller';

describe('SellRecordController', () => {
  let controller: SellRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellRecordController],
    }).compile();

    controller = module.get<SellRecordController>(SellRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
