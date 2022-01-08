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
import { SubprodCategoryDto } from './subprod-category.dto';
import { SubprodCategoryService } from './subprod-category.service';

@Controller('subprod-category')
export class SubprodCategoryController {
  constructor(private subProdCatService: SubprodCategoryService) {}

  @ApiBody({ type: SubprodCategoryDto })
  @ApiOperation({
    summary: 'Add new SubCategory of Product',
    operationId: 'AddSubCategoryProduct',
  })
  @ApiResponse({ status: 200, type: SubprodCategoryDto })
  @Post()
  async create(@Body() job: SubprodCategoryDto): Promise<SubprodCategoryDto> {
    return this.subProdCatService.create(job);
  }

  @ApiOperation({
    summary: 'Get all SubCategory of Product',
    operationId: 'GetSubCategoryProducts',
  })
  @ApiResponse({ status: 200, type: SubprodCategoryDto })
  @Get()
  async findAll(): Promise<SubprodCategoryDto[]> {
    return this.subProdCatService.findAll();
  }

  @ApiOperation({
    summary: 'Get SubCategory of Product by id',
    operationId: 'GetSubCategoryProduct',
  })
  @ApiResponse({ status: 200, type: SubprodCategoryDto })
  @Get(':subProdCategoryID')
  async findOne(
    @Param('subProdCategoryID') id: number,
  ): Promise<SubprodCategoryDto> {
    return this.subProdCatService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update SubCategory of Product by id',
    operationId: 'UpdateSubCategoryProduct',
  })
  @ApiResponse({ status: 200, type: SubprodCategoryDto })
  @Put(':subProdCategoryID')
  async update(
    @Param('subProdCategoryID') id: number,
    @Body() job: SubprodCategoryDto,
  ) {
    return this.subProdCatService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete SubCategory of Product by id',
    operationId: 'DeleteSubCategory of Product',
  })
  @ApiResponse({ status: 200, type: SubprodCategoryDto })
  @Delete(':subProdCategoryID')
  async delete(@Param('subProdCategoryID') id: number) {
    return this.subProdCatService.deleteOne(id);
  }
}
