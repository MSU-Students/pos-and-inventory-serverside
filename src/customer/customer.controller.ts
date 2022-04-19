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
import { CustomerDto } from '../entities/customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private expnesesRepository: CustomerService) {}

  @ApiBody({ type: CustomerDto })
  @ApiOperation({
    summary: 'Add new Customer',
    operationId: 'AddCustomer',
  })
  @ApiResponse({ status: 200, type: CustomerDto })
  @Post()
  async create(@Body() job: CustomerDto): Promise<CustomerDto> {
    return this.expnesesRepository.create(job);
  }

  @ApiOperation({
    summary: 'Get all Product Size',
    operationId: 'GetCustomers',
  })
  @ApiResponse({ status: 200, type: [CustomerDto] })
  @Get()
  async findAll(): Promise<CustomerDto[]> {
    return this.expnesesRepository.findAll();
  }

  @ApiOperation({
    summary: 'Get Customers by id',
    operationId: 'GetCustomer',
  })
  @ApiResponse({ status: 200, type: CustomerDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CustomerDto> {
    return this.expnesesRepository.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Customer by id',
    operationId: 'UpdateCustomer',
  })
  @ApiResponse({ status: 200, type: CustomerDto })
  @Put(':id')
  async update(@Param('id') id: number, @Body() job: CustomerDto) {
    return this.expnesesRepository.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Customer by id',
    operationId: 'DeleteCustomer',
  })
  @ApiResponse({ status: 200, type: CustomerDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.expnesesRepository.deleteOne(id);
  }
}
