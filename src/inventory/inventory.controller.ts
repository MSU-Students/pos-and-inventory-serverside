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
import { InventoryDto } from '../entities/inventory.dto';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @ApiBody({ type: InventoryDto })
  @ApiOperation({
    summary: 'Add new Inventory',
    operationId: 'AddInventory',
  })
  @ApiResponse({ status: 200, type: InventoryDto })
  @Post()
  async create(@Body() job: InventoryDto): Promise<InventoryDto> {
    return this.inventoryService.create(job);
  }

  @ApiOperation({ summary: 'Get all Inventory', operationId: 'GetInventorys' })
  @ApiResponse({ status: 200, type: InventoryDto })
  @Get()
  async findAll(): Promise<InventoryDto[]> {
    return this.inventoryService.findAll();
  }

  @ApiOperation({ summary: 'Get Inventory by id', operationId: 'GetInventory' })
  @ApiResponse({ status: 200, type: InventoryDto })
  @Get(':itemCode')
  async findOne(@Param('itemCode') id: string): Promise<InventoryDto> {
    return this.inventoryService.findOne(id);
  }

  @ApiOperation({
    summary: 'Filter Inventory item by keyword',
    operationId: 'FilterInventoryItem',
  })
  @ApiResponse({ status: 200, type: InventoryDto })
  @Get('filter/:keyword')
  async filterItem(@Param('keyword') keyword: string): Promise<InventoryDto[]> {
    return this.inventoryService.filterItem(keyword);
  }

  @ApiOperation({
    summary: 'Update Inventory by id',
    operationId: 'UpdateInventory',
  })
  @ApiResponse({ status: 200, type: InventoryDto })
  @Put(':itemCode')
  async update(@Param('itemCode') id: string, @Body() job: InventoryDto) {
    return this.inventoryService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Inventory by id',
    operationId: 'DeleteInventory',
  })
  @ApiResponse({ status: 200, type: InventoryDto })
  @Delete(':itemCode')
  async delete(@Param('itemCode') id: string) {
    return this.inventoryService.deleteOne(id);
  }
}
