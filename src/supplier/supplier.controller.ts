import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { SupplierDto } from '../entities/supplier.dto';
import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {
  constructor(private service: SupplierService) {}
  @ApiResponse({ type: SupplierDto })
  @Post()
  create(@Body() newSupplier: SupplierDto): Promise<SupplierDto> {
    return this.service.create(newSupplier);
  }
  @Get(':id')
  findOne(@Param('id') myId: string): Promise<SupplierDto> {
    throw 'Not Implemented';
  }
  @Put(':id')
  update(
    @Param('id') myId: string,
    @Body() newSupplier: SupplierDto,
  ): Promise<SupplierDto> {
    throw 'Not Implemented';
  }
  @Get()
  findAll(): Promise<SupplierDto[]> {
    throw 'Not Implemented';
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<SupplierDto> {
    throw 'Not Implemented';
  }
}
