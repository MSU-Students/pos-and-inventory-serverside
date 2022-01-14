import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSizeDto } from '../entities/product-size.dto';

@Injectable()
export class ProductSizeService {
  constructor(
    @InjectRepository(ProductSizeDto)
    private productSizeRepository: Repository<ProductSizeDto>,
  ) {}

  async create(application: ProductSizeDto): Promise<ProductSizeDto> {
    return this.productSizeRepository.save(application);
  }
  async findAll(): Promise<ProductSizeDto[]> {
    return this.productSizeRepository.find();
  }
  async findOne(productSizeID: number): Promise<ProductSizeDto> {
    return this.productSizeRepository.findOne(productSizeID);
  }
  async update(productSizeID: number, application: ProductSizeDto) {
    return this.productSizeRepository.update(productSizeID, application);
  }
  async deleteOne(productSizeID: number) {
    return this.productSizeRepository.delete(productSizeID);
  }
}
