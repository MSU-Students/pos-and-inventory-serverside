import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubprodCategoryDto } from './subprod-category.dto';
@Injectable()
export class SubprodCategoryService {
  constructor(
    @InjectRepository(SubprodCategoryDto)
    private subProdCatRepository: Repository<SubprodCategoryDto>,
  ) {}

  async create(application: SubprodCategoryDto): Promise<SubprodCategoryDto> {
    return this.subProdCatRepository.save(application);
  }
  async findAll(): Promise<SubprodCategoryDto[]> {
    return this.subProdCatRepository.find();
  }
  async findOne(subProdCategoryID: number): Promise<SubprodCategoryDto> {
    return this.subProdCatRepository.findOne(subProdCategoryID);
  }
  async update(subProdCategoryID: number, application: SubprodCategoryDto) {
    return this.subProdCatRepository.update(subProdCategoryID, application);
  }
  async deleteOne(subProdCategoryID: number) {
    return this.subProdCatRepository.delete(subProdCategoryID);
  }
}
