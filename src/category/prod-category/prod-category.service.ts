import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdCategoryDto } from './prod-category.dto';

@Injectable()
export class ProdCategoryService {
  constructor(
    @InjectRepository(ProdCategoryDto)
    private prodCatRepository: Repository<ProdCategoryDto>,
  ) {}

  async create(application: ProdCategoryDto): Promise<ProdCategoryDto> {
    return this.prodCatRepository.save(application);
  }
  async findAll(): Promise<ProdCategoryDto[]> {
    return this.prodCatRepository.find();
  }
  async findOne(prodCategoryID: number): Promise<ProdCategoryDto> {
    return this.prodCatRepository.findOne(prodCategoryID);
  }
  async update(prodCategoryID: number, application: ProdCategoryDto) {
    return this.prodCatRepository.update(prodCategoryID, application);
  }
  async deleteOne(prodCategoryID: number) {
    return this.prodCatRepository.delete(prodCategoryID);
  }
}
