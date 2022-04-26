import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleRecordDto } from '../entities/sale-record.dto';

@Injectable()
export class SaleRecordService {
  constructor(
    @InjectRepository(SaleRecordDto)
    private SaleRecordRepository: Repository<SaleRecordDto>,
  ) {}

  async create(application: SaleRecordDto): Promise<SaleRecordDto> {
    return this.SaleRecordRepository.save(application);
  }
  async findAll(): Promise<SaleRecordDto[]> {
    return this.SaleRecordRepository.find();
  }
  async findOne(invoiceID: number): Promise<SaleRecordDto> {
    return this.SaleRecordRepository.findOne(invoiceID);
  }
  async update(invoiceID: number, application: SaleRecordDto) {
    return this.SaleRecordRepository.update(invoiceID, application);
  }
  async deleteOne(invoiceID: number) {
    return this.SaleRecordRepository.delete(invoiceID);
  }
}
