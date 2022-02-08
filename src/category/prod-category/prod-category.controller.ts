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
import { ProdCategoryDto } from './prod-category.dto';
import { ProdCategoryService } from './prod-category.service';

@Controller('prod-category')
export class ProdCategoryController {
  constructor(private prodCatService: ProdCategoryService) {}

  @ApiBody({ type: ProdCategoryDto })
  @ApiOperation({
    summary: 'Add new Product Category',
    operationId: 'AddProductCategory',
  })
  @ApiResponse({ status: 200, type: ProdCategoryDto })
  @Post()
  async create(@Body() job: ProdCategoryDto): Promise<ProdCategoryDto> {
    return this.prodCatService.create(job);
  }

  @ApiOperation({
    summary: 'Get all Product Category',
    operationId: 'GetProduct Categorys',
  })
  @ApiResponse({ status: 200, type: ProdCategoryDto })
  @Get()
  async findAll(): Promise<ProdCategoryDto[]> {
    return this.prodCatService.findAll();
  }

  @ApiOperation({
    summary: 'Get Product Category by id',
    operationId: 'GetProduct Category',
  })
  @ApiResponse({ status: 200, type: ProdCategoryDto })
  @Get(':prodCategoryID')
  async findOne(@Param('prodCategoryID') id: number): Promise<ProdCategoryDto> {
    return this.prodCatService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Product Category by id',
    operationId: 'UpdateProductCategory',
  })
  @ApiResponse({ status: 200, type: ProdCategoryDto })
  @Put(':prodCategoryID')
  async update(
    @Param('prodCategoryID') id: number,
    @Body() job: ProdCategoryDto,
  ) {
    return this.prodCatService.update(id, job);
  }
  @ApiResponse({ status: 200, type: ProdCategoryDto })
  @Delete(':prodCategoryID')
  async delete(@Param('prodCategoryID') id: number) {
    return this.prodCatService.deleteOne(id);
  }
}
