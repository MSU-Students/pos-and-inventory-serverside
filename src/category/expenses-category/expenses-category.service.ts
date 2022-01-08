import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpensesCategoryDto } from './expenses-category.dto';

@Injectable()
export class ExpensesCategoryService {
  constructor(
    @InjectRepository(ExpensesCategoryDto)
    private expCatRepository: Repository<ExpensesCategoryDto>,
  ) {}

  async create(application: ExpensesCategoryDto): Promise<ExpensesCategoryDto> {
    return this.expCatRepository.save(application);
  }
  async findAll(): Promise<ExpensesCategoryDto[]> {
    return this.expCatRepository.find();
  }
  async findOne(expCatID: number): Promise<ExpensesCategoryDto> {
    return this.expCatRepository.findOne(expCatID);
  }
  async update(expCatID: number, application: ExpensesCategoryDto) {
    return this.expCatRepository.update(expCatID, application);
  }
  async deleteOne(expCatID: number) {
    return this.expCatRepository.delete(expCatID);
  }
}
