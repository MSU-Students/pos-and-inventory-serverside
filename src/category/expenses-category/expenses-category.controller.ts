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
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { ExpensesCategoryDto } from './expenses-category.dto';
import { ExpensesCategoryService } from './expenses-category.service';

@Controller('expenses-category')
export class ExpensesCategoryController {
  constructor(private expCatService: ExpensesCategoryService) {}

  @ApiBody({ type: ExpensesCategoryDto })
  @ApiOperation({
    summary: 'Add new Expenses Category',
    operationId: 'AddExpensesCategory',
  })
  @ApiResponse({ status: 200, type: ExpensesCategoryDto })
  @Post()
  async create(@Body() job: ExpensesCategoryDto): Promise<ExpensesCategoryDto> {
    return this.expCatService.create(job);
  }

  @ApiOperation({
    summary: 'Get all Expenses Category',
    operationId: 'GetExpensesCategorys',
  })
  @ApiResponse({ status: 200, type: ExpensesCategoryDto })
  @Get()
  async findAll(): Promise<ExpensesCategoryDto[]> {
    return this.expCatService.findAll();
  }

  @ApiOperation({
    summary: 'Get Expenses Category by id',
    operationId: 'GetExpensesCategory',
  })
  @ApiResponse({ status: 200, type: ExpensesCategoryDto })
  @Get(':expensesCategoryID')
  async findOne(
    @Param('expensesCategoryID') id: number,
  ): Promise<ExpensesCategoryDto> {
    return this.expCatService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Expenses Category by id',
    operationId: 'UpdateExpensesCategory',
  })
  @ApiResponse({ status: 200, type: ExpensesCategoryDto })
  @Put(':expensesCategoryID')
  async update(
    @Param('expensesCategoryID') id: number,
    @Body() job: ExpensesCategoryDto,
  ) {
    return this.expCatService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Expenses Category by id',
    operationId: 'DeleteExpensesCategory',
  })
  @ApiResponse({ status: 200, type: ExpensesCategoryDto })
  @Delete(':expensesCategoryID')
  async delete(@Param('expensesCategoryID') id: number) {
    return this.expCatService.deleteOne(id);
  }
}
