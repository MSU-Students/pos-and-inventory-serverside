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
import { InventoryCategoryDto } from './inventory-category.dto';
import { InventoryCategoryService } from './inventory-category.service';

@Controller('inventory_category')
export class InventoryCategoryController {
  constructor(private invCatService: InventoryCategoryService) {}

  @ApiBody({ type: InventoryCategoryDto })
  @ApiOperation({
    summary: 'Add new Inventory Category',
    operationId: 'AddInventory Category',
  })
  @ApiResponse({ status: 200, type: InventoryCategoryDto })
  @Post()
  async create(
    @Body() job: InventoryCategoryDto,
  ): Promise<InventoryCategoryDto> {
    return this.invCatService.create(job);
  }

  @ApiOperation({
    summary: 'Get all Inventory Category',
    operationId: 'GetInventory Categorys',
  })
  @ApiResponse({ status: 200, type: InventoryCategoryDto })
  @Get()
  async findAll(): Promise<InventoryCategoryDto[]> {
    return this.invCatService.findAll();
  }

  @ApiOperation({
    summary: 'Get Inventory Category by id',
    operationId: 'GetInventory Category',
  })
  @ApiResponse({ status: 200, type: InventoryCategoryDto })
  @Get(':categoryID')
  async findOne(
    @Param('categoryID') id: number,
  ): Promise<InventoryCategoryDto> {
    return this.invCatService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Inventory Category by id',
    operationId: 'UpdateInventory Category',
  })
  @ApiResponse({ status: 200, type: InventoryCategoryDto })
  @Put(':categoryID')
  async update(
    @Param('categoryID') id: number,
    @Body() job: InventoryCategoryDto,
  ) {
    return this.invCatService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Inventory Category by id',
    operationId: 'DeleteInventory Category',
  })
  @ApiResponse({ status: 200, type: InventoryCategoryDto })
  @Delete(':categoryID')
  async delete(@Param('categoryID') id: number) {
    return this.invCatService.deleteOne(id);
  }
}
