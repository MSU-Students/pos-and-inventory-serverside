import { Test, TestingModule } from '@nestjs/testing';
import { SellRecordService } from './sell-record.service';

describe('SellRecordService', () => {
  let service: SellRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellRecordService],
    }).compile();

    service = module.get<SellRecordService>(SellRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
