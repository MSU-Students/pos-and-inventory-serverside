import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserDto } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @ApiBody({ type: UserDto })
  @ApiOperation({ summary: 'Add new user', operationId: 'AddUser' })
  @ApiResponse({ status: 200, type: UserDto })
  @Post('/create')
  create(@Body() user: UserDto) {
    return this.authService.register(user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all users', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get user by id', operationId: 'GetUser' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserDto> {
    const user = await this.userService.findOne(id);
    return {
      ...user,
      password: undefined,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update user by id', operationId: 'UpdateUser' })
  @ApiResponse({ status: 200, type: UserDto })
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UserDto) {
    return this.userService.update(id, user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete user by id', operationId: 'DeleteUser' })
  @ApiResponse({ status: 200, type: UserDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userService.deleteOne(id);
  }
}
