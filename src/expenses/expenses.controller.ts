import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { ExpensesDto } from '../entities/expenses.dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private expnesesRepository: ExpensesService) {}

  @ApiBody({ type: ExpensesDto })
  @ApiOperation({
    summary: 'Add new Product Size',
    operationId: 'AddProductSize',
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
  @ApiResponse({ status: 200, type: ExpensesDto })
  @Get()
  async findAll(): Promise<ExpensesDto[]> {
    return this.expnesesRepository.findAll();
  }

  @ApiOperation({
    summary: 'Get Expenses by id',
    operationId: 'GetProductSize',
  })
  @ApiResponse({ status: 200, type: ExpensesDto })
  @Get(':expensesID')
  async findOne(@Param('expensesID') id: number): Promise<ExpensesDto> {
    return this.expnesesRepository.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Product Size by id',
    operationId: 'UpdateProductSize',
  })
  @ApiResponse({ status: 200, type: ExpensesDto })
  @Put(':expensesID')
  async update(@Param('expensesID') id: number, @Body() job: ExpensesDto) {
    return this.expnesesRepository.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Product Size by id',
    operationId: 'DeleteProductSize',
  })
  @ApiResponse({ status: 200, type: ExpensesDto })
  @Delete(':expensesID')
  async delete(@Param('expensesID') id: number) {
    return this.expnesesRepository.deleteOne(id);
  }
}
