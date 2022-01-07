import { UsersDto } from './entities/users.dto';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierDto } from './entities/supplier.dto';
import { SupplierController } from './supplier/supplier.controller';
import { SupplierService } from './supplier/supplier.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierDto, UsersDto]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pos_and_inventorydb',
      entities: [SupplierDto, UsersDto],
      synchronize: true,
      dropSchema: true,
    }),
  ],
  controllers: [SupplierController, UsersController],
  providers: [SupplierService, UsersService],
})
export class AppModule {}
