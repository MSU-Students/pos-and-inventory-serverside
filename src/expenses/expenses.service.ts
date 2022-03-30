import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpensesDto } from '../entities/expenses.dto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(ExpensesDto)
    private expensesRepository: Repository<ExpensesDto>,
  ) {}

  async create(application: ExpensesDto): Promise<ExpensesDto> {
    return this.expensesRepository.save(application);
  }
  async findAll(): Promise<ExpensesDto[]> {
    return this.expensesRepository.find({
      relations: ['supplier'],
    });
  }
  async findOne(expensesID: number): Promise<ExpensesDto> {
    return this.expensesRepository.findOne(expensesID);
  }
  async update(expensesID: number, application: ExpensesDto) {
    return this.expensesRepository.update(expensesID, application);
  }
  async deleteOne(expensesID: number) {
    return this.expensesRepository.delete(expensesID);
  }
}
