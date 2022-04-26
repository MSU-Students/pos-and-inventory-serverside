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
import { SaleRecordDto } from '../entities/sale-record.dto';
import { SaleRecordService } from './sale-record.service';

@Controller('SaleRecord')
export class SaleRecordController {
  constructor(private SaleRecordService: SaleRecordService) {}

  @ApiBody({ type: SaleRecordDto })
  @ApiOperation({
    summary: 'Add new Sale Record',
    operationId: 'AddSaleRecord',
  })
  @ApiResponse({ status: 200, type: SaleRecordDto })
  @Post()
  async create(@Body() job: SaleRecordDto): Promise<SaleRecordDto> {
    return this.SaleRecordService.create(job);
  }

  @ApiOperation({
    summary: 'Get all Sale Record',
    operationId: 'GetSaleRecords',
  })
  @ApiResponse({ status: 200, type: SaleRecordDto })
  @Get()
  async findAll(): Promise<SaleRecordDto[]> {
    return this.SaleRecordService.findAll();
  }

  @ApiOperation({
    summary: 'Get Sale Record by id',
    operationId: 'GetSaleRecord',
  })
  @ApiResponse({ status: 200, type: SaleRecordDto })
  @Get(':invoiceID')
  async findOne(@Param('invoiceID') id: number): Promise<SaleRecordDto> {
    return this.SaleRecordService.findOne(id);
  }

  @ApiOperation({
    summary: 'Update Sale Record by id',
    operationId: 'UpdateSaleRecord',
  })
  @ApiResponse({ status: 200, type: SaleRecordDto })
  @Put(':invoiceID')
  async update(@Param('invoiceID') id: number, @Body() job: SaleRecordDto) {
    return this.SaleRecordService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Sale Record by id',
    operationId: 'DeleteSaleRecord',
  })
  @ApiResponse({ status: 200, type: SaleRecordDto })
  @Delete(':invoiceID')
  async delete(@Param('invoiceID') id: number) {
    return this.SaleRecordService.deleteOne(id);
  }
}
