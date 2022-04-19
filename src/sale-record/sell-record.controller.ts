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
import { SellRecordDto } from '../entities/sell-record.dto';
import { SellRecordService } from './sell-record.service';

@Controller('sell-record')
export class SellRecordController {
  constructor(private sellRecordService: SellRecordService) {}

  @ApiBody({ type: SellRecordDto })
  @ApiOperation({
    summary: 'Add new Sell Record',
    operationId: 'AddSellRecord',
  })
  @ApiResponse({ status: 200, type: SellRecordDto })
  @Post()
  async create(@Body() job: SellRecordDto): Promise<SellRecordDto> {
    return this.sellRecordService.create(job);
  }

  @ApiOperation({
    summary: 'Get all Sell Record',
    operationId: 'GetSellRecords',
  })
  @ApiResponse({ status: 200, type: SellRecordDto })
  @Get()
  async findAll(): Promise<SellRecordDto[]> {
    return this.sellRecordService.findAll();
  }

  @ApiOperation({
    summary: 'Get Sell Record by id',
    operationId: 'GetSellRecord',
  })
  @ApiResponse({ status: 200, type: SellRecordDto })
  @Get(':invoiceID')
  async findOne(@Param('invoiceID') id: number): Promise<SellRecordDto> {
    return this.sellRecordService.findOne(id);
  }

  @ApiOperation({
    summary: 'Update Sell Record by id',
    operationId: 'UpdateSellRecord',
  })
  @ApiResponse({ status: 200, type: SellRecordDto })
  @Put(':invoiceID')
  async update(@Param('invoiceID') id: number, @Body() job: SellRecordDto) {
    return this.sellRecordService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Sell Record by id',
    operationId: 'DeleteSellRecord',
  })
  @ApiResponse({ status: 200, type: SellRecordDto })
  @Delete(':invoiceID')
  async delete(@Param('invoiceID') id: number) {
    return this.sellRecordService.deleteOne(id);
  }
}
