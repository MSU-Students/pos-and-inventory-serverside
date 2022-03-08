import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExpensesDto } from '../entities/expenses.dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private expnesesRepository: ExpensesService) {}

  @ApiBody({ type: ExpensesDto })
  @ApiOperation({
    summary: 'Add new Expense',
    operationId: 'AddExpenses',
  })
  @ApiResponse({ status: 200, type: ExpensesDto })
  @Post()
  async create(@Body() job: ExpensesDto): Promise<ExpensesDto> {
    return this.expnesesRepository.create(job);
  }

  @ApiOperation({
    summary: 'Get all Product Size',
    operationId: 'GetExpenses',
  })
  @ApiResponse({ status: 200, type: [ExpensesDto] })
  @Get()
  async findAll(): Promise<ExpensesDto[]> {
    return this.expnesesRepository.findAll();
  }

  @ApiOperation({
    summary: 'Get Expenses by id',
    operationId: 'GetExpense',
  })
  @ApiResponse({ status: 200, type: ExpensesDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ExpensesDto> {
    return this.expnesesRepository.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Expense by id',
    operationId: 'UpdateExpense',
  })
  @ApiResponse({ status: 200, type: ExpensesDto })
  @Put(':id')
  async update(@Param('id') id: number, @Body() job: ExpensesDto) {
    return this.expnesesRepository.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Expense by id',
    operationId: 'DeleteExpense',
  })
  @ApiResponse({ status: 200, type: ExpensesDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.expnesesRepository.deleteOne(id);
  }
}
