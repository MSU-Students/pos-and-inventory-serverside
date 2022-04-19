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
import { SaleOrderDto } from 'src/entities/sale-order.dto';
import { SaleOrderService } from './sale-order.service';

@Controller('sale-order')
export class SaleOrderController {
  constructor(private saleOrderRepository: SaleOrderService) {}

  @ApiBody({ type: SaleOrderDto })
  @ApiOperation({
    summary: 'Add new SaleOrder',
    operationId: 'AddSaleOrder',
  })
  @ApiResponse({ status: 200, type: SaleOrderDto })
  @Post()
  async create(@Body() job: SaleOrderDto): Promise<SaleOrderDto> {
    return this.saleOrderRepository.create(job);
  }

  @ApiOperation({
    summary: 'Get all Product Size',
    operationId: 'GetSaleOrders',
  })
  @ApiResponse({ status: 200, type: [SaleOrderDto] })
  @Get()
  async findAll(): Promise<SaleOrderDto[]> {
    return this.saleOrderRepository.findAll();
  }

  @ApiOperation({
    summary: 'Get SaleOrders by id',
    operationId: 'GetSaleOrder',
  })
  @ApiResponse({ status: 200, type: SaleOrderDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<SaleOrderDto> {
    return this.saleOrderRepository.findOne(id);
  }
  @ApiOperation({
    summary: 'Update SaleOrder by id',
    operationId: 'UpdateSaleOrder',
  })
  @ApiResponse({ status: 200, type: SaleOrderDto })
  @Put(':id')
  async update(@Param('id') id: number, @Body() job: SaleOrderDto) {
    return this.saleOrderRepository.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete SaleOrder by id',
    operationId: 'DeleteSaleOrder',
  })
  @ApiResponse({ status: 200, type: SaleOrderDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.saleOrderRepository.deleteOne(id);
  }
}
