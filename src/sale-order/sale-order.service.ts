import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleOrderDto } from '../entities/sale-order.dto';

@Injectable()
export class SaleOrderService {
  constructor(
    @InjectRepository(SaleOrderDto)
    private saleOrderRepository: Repository<SaleOrderDto>,
  ) {}

  async create(application: SaleOrderDto): Promise<SaleOrderDto> {
    return this.saleOrderRepository.save(application);
  }
  async findAll(): Promise<SaleOrderDto[]> {
    return this.saleOrderRepository.find({
      relations: ['supplier'],
    });
  }
  async findOne(id: number): Promise<SaleOrderDto> {
    return this.saleOrderRepository.findOne(id);
  }
  async update(id: number, application: SaleOrderDto) {
    return this.saleOrderRepository.update(id, application);
  }
  async deleteOne(id: number) {
    return this.saleOrderRepository.delete(id);
  }
}
