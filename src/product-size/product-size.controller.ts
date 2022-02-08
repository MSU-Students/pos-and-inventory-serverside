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
import { ProductSizeDto } from '../entities/product-size.dto';
import { ProductSizeService } from './product-size.service';

@Controller('product-size')
export class ProductSizeController {
  constructor(private productSizeRepository: ProductSizeService) {}

  @ApiBody({ type: ProductSizeDto })
  @ApiOperation({
    summary: 'Add new Product Size',
    operationId: 'AddProductSize',
  })
  @ApiResponse({ status: 200, type: ProductSizeDto })
  @Post()
  async create(@Body() job: ProductSizeDto): Promise<ProductSizeDto> {
    return this.productSizeRepository.create(job);
  }

  @ApiOperation({
    summary: 'Get all Product Size',
    operationId: 'GetProductSizes',
  })
  @ApiResponse({ status: 200, type: ProductSizeDto })
  @Get()
  async findAll(): Promise<ProductSizeDto[]> {
    return this.productSizeRepository.findAll();
  }

  @ApiOperation({
    summary: 'Get Product Size by id',
    operationId: 'GetProductSize',
  })
  @ApiResponse({ status: 200, type: ProductSizeDto })
  @Get(':productSizeID')
  async findOne(@Param('productSizeID') id: number): Promise<ProductSizeDto> {
    return this.productSizeRepository.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Product Size by id',
    operationId: 'UpdateProductSize',
  })
  @ApiResponse({ status: 200, type: ProductSizeDto })
  @Put(':productSizeID')
  async update(
    @Param('productSizeID') id: number,
    @Body() job: ProductSizeDto,
  ) {
    return this.productSizeRepository.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Product Size by id',
    operationId: 'DeleteProductSize',
  })
  @ApiResponse({ status: 200, type: ProductSizeDto })
  @Delete(':productSizeID')
  async delete(@Param('productSizeID') id: number) {
    return this.productSizeRepository.deleteOne(id);
  }
}
