import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ManageProductDto } from '../entities/manage-product.dto';

@Injectable()
export class ManageProductService {
  constructor(
    @InjectRepository(ManageProductDto)
    private manageProductRepository: Repository<ManageProductDto>,
  ) {}

  async create(application: ManageProductDto): Promise<ManageProductDto> {
    return this.manageProductRepository.save(application);
  }
  async findAll(): Promise<ManageProductDto[]> {
    return this.manageProductRepository.find();
  }
  async findOne(product_ID: number): Promise<ManageProductDto> {
    return this.manageProductRepository.findOne(product_ID);
  }
  async update(product_ID: number, application: ManageProductDto) {
    return this.manageProductRepository.update(product_ID, application);
  }
  async deleteOne(product_ID: number) {
    return this.manageProductRepository.delete(product_ID);
  }
}
