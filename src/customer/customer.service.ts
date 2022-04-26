import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDto } from '../entities/customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerDto)
    private customerRepository: Repository<CustomerDto>,
  ) {}

  async create(application: CustomerDto): Promise<CustomerDto> {
    return this.customerRepository.save(application);
  }
  async findAll(): Promise<CustomerDto[]> {
    return this.customerRepository.find({});
  }
  async findOne(id: number): Promise<CustomerDto> {
    return this.customerRepository.findOne(id);
  }
  async update(id: number, application: CustomerDto) {
    return this.customerRepository.update(id, application);
  }
  async deleteOne(id: number) {
    return this.customerRepository.delete(id);
  }
}
