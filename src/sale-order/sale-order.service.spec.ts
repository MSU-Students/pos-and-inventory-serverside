import { Test, TestingModule } from '@nestjs/testing';
import { SaleOrderService } from './sale-order.service';

describe('SaleOrderService', () => {
  let service: SaleOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleOrderService],
    }).compile();

    service = module.get<SaleOrderService>(SaleOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
