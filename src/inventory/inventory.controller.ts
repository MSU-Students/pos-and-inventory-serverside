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
  @Get(':userID')
  async findOne(@Param('userID') id: string): Promise<InventoryDto> {
    return this.inventoryService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Inventory by id',
    operationId: 'UpdateInventory',
  })
  @ApiResponse({ status: 200, type: InventoryDto })
  @Put(':userID')
  async update(@Param('userID') id: string, @Body() job: InventoryDto) {
    return this.inventoryService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Inventory by id',
    operationId: 'DeleteInventory',
  })
  @ApiResponse({ status: 200, type: InventoryDto })
  @Delete(':userID')
  async delete(@Param('userID') id: string) {
    return this.inventoryService.deleteOne(id);
  }
}
