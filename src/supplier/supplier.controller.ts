import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SupplierDto } from '../entities/supplier.dto';
import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {
  constructor(private supplierService: SupplierService) {}

  @ApiBody({ type: SupplierDto })
  @ApiOperation({
    summary: 'Add new supplier',
    operationId: 'AddSupplier',
  })
  @ApiResponse({ status: 200, type: SupplierDto })
  @Post()
  async create(@Body() job: SupplierDto): Promise<SupplierDto> {
    return this.supplierService.create(job);
  }

  @ApiOperation({ summary: 'Get all supplier', operationId: 'GetSuppliers' })
  @ApiResponse({ status: 200, type: SupplierDto })
  @Get()
  async findAll(): Promise<SupplierDto[]> {
    return this.supplierService.findAll();
  }

  @ApiOperation({ summary: 'Get supplier by id', operationId: 'GetSupplier' })
  @ApiResponse({ status: 200, type: SupplierDto })
  @Get(':supplierID')
  async findOne(@Param('supplierID') id: number): Promise<SupplierDto> {
    const res = await this.supplierService.findOne(id);
    if (!res) {
      throw new NotFoundException('Supplier ID not found');
    }
    return res;
  }
  @ApiOperation({
    summary: 'Update supplier by id',
    operationId: 'UpdateSupplier',
  })
  @ApiResponse({ status: 200, type: SupplierDto })
  @Put(':supplierID')
  async update(@Param('supplierID') id: number, @Body() job: SupplierDto) {
    return this.supplierService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete supplier by id',
    operationId: 'DeleteSupplier',
  })
  @ApiResponse({ status: 200, type: SupplierDto })
  @Delete(':supplierID')
  async delete(@Param('supplierID') id: number) {
    return this.supplierService.deleteOne(id);
  }
}
