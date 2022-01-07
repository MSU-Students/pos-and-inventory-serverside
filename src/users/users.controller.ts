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
import { UsersDto } from '../entities/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiBody({ type: UsersDto })
  @ApiOperation({
    summary: 'Add new supplier',
    operationId: 'AddSupplier',
  })
  @ApiResponse({ status: 200, type: UsersDto })
  @Post()
  async create(@Body() job: UsersDto): Promise<UsersDto> {
    return this.usersService.create(job);
  }

  @ApiOperation({ summary: 'Get all supplier', operationId: 'GetSuppliers' })
  @ApiResponse({ status: 200, type: UsersDto })
  @Get()
  async findAll(): Promise<UsersDto[]> {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get supplier by id', operationId: 'GetSupplier' })
  @ApiResponse({ status: 200, type: UsersDto })
  @Get(':userID')
  async findOne(@Param('userID') id: number): Promise<UsersDto> {
    return this.usersService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update supplier by id',
    operationId: 'UpdateSupplier',
  })
  @ApiResponse({ status: 200, type: UsersDto })
  @Put(':userID')
  async update(@Param('userID') id: number, @Body() job: UsersDto) {
    return this.usersService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete supplier by id',
    operationId: 'DeleteSupplier',
  })
  @ApiResponse({ status: 200, type: UsersDto })
  @Delete(':userID')
  async delete(@Param('userID') id: number) {
    return this.usersService.deleteOne(id);
  }
}
