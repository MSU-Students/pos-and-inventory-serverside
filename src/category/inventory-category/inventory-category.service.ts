import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryCategoryDto } from './inventory-category.dto';

@Injectable()
export class InventoryCategoryService {
  constructor(
    @InjectRepository(InventoryCategoryDto)
    private invCatRepository: Repository<InventoryCategoryDto>,
  ) {}

  async create(
    application: InventoryCategoryDto,
  ): Promise<InventoryCategoryDto> {
    return this.invCatRepository.save(application);
  }
  async findAll(): Promise<InventoryCategoryDto[]> {
    return this.invCatRepository.find();
  }
  async findOne(categoryID: number): Promise<InventoryCategoryDto> {
    return this.invCatRepository.findOne(categoryID);
  }
  async update(categoryID: number, application: InventoryCategoryDto) {
    return this.invCatRepository.update(categoryID, application);
  }
  async deleteOne(categoryID: number) {
    return this.invCatRepository.delete(categoryID);
  }
}
