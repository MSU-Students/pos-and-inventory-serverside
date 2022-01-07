import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplierDto } from '../entities/supplier.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(SupplierDto)
    private supplierRepository: Repository<SupplierDto>,
  ) {}

  async create(application: SupplierDto): Promise<SupplierDto> {
    return this.supplierRepository.save(application);
  }
  async findAll(): Promise<SupplierDto[]> {
    return this.supplierRepository.find();
  }
  async findOne(supplierID: number): Promise<SupplierDto> {
    return this.supplierRepository.findOne(supplierID);
  }
  async update(supplierID: number, application: SupplierDto) {
    return this.supplierRepository.update(supplierID, application);
  }
  async deleteOne(supplierID: number) {
    return this.supplierRepository.delete(supplierID);
  }
}
