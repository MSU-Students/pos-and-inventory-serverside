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
import { PurchaseDto } from '../entities/purchase.dto';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @ApiBody({ type: PurchaseDto })
  @ApiOperation({
    summary: 'Add new Purchase',
    operationId: 'AddPurchase',
  })
  @ApiResponse({ status: 200, type: PurchaseDto })
  @Post()
  async create(@Body() job: PurchaseDto): Promise<PurchaseDto> {
    return this.purchaseService.create(job);
  }

  @ApiOperation({ summary: 'Get all Purchase', operationId: 'GetPurchases' })
  @ApiResponse({ status: 200, type: PurchaseDto })
  @Get()
  async findAll(): Promise<PurchaseDto[]> {
    return this.purchaseService.findAll();
  }

  @ApiOperation({ summary: 'Get Purchase by id', operationId: 'GetPurchase' })
  @ApiResponse({ status: 200, type: PurchaseDto })
  @Get(':purchaseID')
  async findOne(@Param('purchaseID') id: number): Promise<PurchaseDto> {
    return this.purchaseService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Purchase by id',
    operationId: 'UpdatePurchase',
  })
  @ApiResponse({ status: 200, type: PurchaseDto })
  @Put(':purchaseID')
  async update(@Param('purchaseID') id: number, @Body() job: PurchaseDto) {
    return this.purchaseService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Purchase by id',
    operationId: 'DeletePurchase',
  })
  @ApiResponse({ status: 200, type: PurchaseDto })
  @Delete(':purchaseID')
  async delete(@Param('purchaseID') id: number) {
    return this.purchaseService.deleteOne(id);
  }
}
