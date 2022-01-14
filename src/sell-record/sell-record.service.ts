import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SellRecordDto } from '../entities/sell-record.dto';

@Injectable()
export class SellRecordService {
  constructor(
    @InjectRepository(SellRecordDto)
    private sellRecordRepository: Repository<SellRecordDto>,
  ) {}

  async create(application: SellRecordDto): Promise<SellRecordDto> {
    return this.sellRecordRepository.save(application);
  }
  async findAll(): Promise<SellRecordDto[]> {
    return this.sellRecordRepository.find();
  }
  async findOne(invoiceID: number): Promise<SellRecordDto> {
    return this.sellRecordRepository.findOne(invoiceID);
  }
  async update(invoiceID: number, application: SellRecordDto) {
    return this.sellRecordRepository.update(invoiceID, application);
  }
  async deleteOne(invoiceID: number) {
    return this.sellRecordRepository.delete(invoiceID);
  }
}
