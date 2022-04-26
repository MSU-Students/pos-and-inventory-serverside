import { Test, TestingModule } from '@nestjs/testing';
import { SaleRecordService } from './sale-record.service';

describe('SaleRecordService', () => {
  let service: SaleRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleRecordService],
    }).compile();

    service = module.get<SaleRecordService>(SaleRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
