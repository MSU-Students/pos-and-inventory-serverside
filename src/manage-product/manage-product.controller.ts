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
import { ManageProductDto } from '../entities/manage-product.dto';
import { ManageProductService } from './manage-product.service';

@Controller('manage-product')
export class ManageProductController {
  constructor(private manageProductService: ManageProductService) {}

  @ApiBody({ type: ManageProductDto })
  @ApiOperation({
    summary: 'Add new Product',
    operationId: 'AddProduct',
  })
  @ApiResponse({ status: 200, type: ManageProductDto })
  @Post()
  async create(@Body() job: ManageProductDto): Promise<ManageProductDto> {
    return this.manageProductService.create(job);
  }

  @ApiOperation({ summary: 'Get all Product', operationId: 'GetProducts' })
  @ApiResponse({ status: 200, type: ManageProductDto[] })
  @Get()
  async findAll(): Promise<ManageProductDto[]> {
    return this.manageProductService.findAll();
  }

  @ApiOperation({ summary: 'Get Product by id', operationId: 'GetProduct' })
  @ApiResponse({ status: 200, type: ManageProductDto })
  @Get(':product_ID')
  async findOne(@Param('product_ID') id: number): Promise<ManageProductDto> {
    return this.manageProductService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Product by id',
    operationId: 'UpdateProduct',
  })
  @ApiResponse({ status: 200, type: ManageProductDto })
  @Put(':product_ID')
  async update(@Param('product_ID') id: number, @Body() job: ManageProductDto) {
    return this.manageProductService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Product by id',
    operationId: 'DeleteProduct',
  })
  @ApiResponse({ status: 200, type: ManageProductDto })
  @Delete(':product_ID')
  async delete(@Param('product_ID') id: number) {
    return this.manageProductService.deleteOne(id);
  }
}
