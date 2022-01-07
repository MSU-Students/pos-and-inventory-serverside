import { ManageProductDto } from './entities/manage-product.dto';
import { InventoryDto } from './entities/inventory.dto';
import { UsersDto } from './entities/users.dto';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierDto } from './entities/supplier.dto';
import { SupplierController } from './supplier/supplier.controller';
import { SupplierService } from './supplier/supplier.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ManageProductController } from './manage-product/manage-product.controller';
import { ManageProductService } from './manage-product/manage-product.service';
import { InventoryController } from './inventory/inventory.controller';
import { InventoryService } from './inventory/inventory.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SupplierDto,
      UsersDto,
      InventoryDto,
      ManageProductDto,
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pos_and_inventorydb',
      entities: [SupplierDto, UsersDto, InventoryDto, ManageProductDto],
      synchronize: true,
      dropSchema: true,
    }),
  ],
  controllers: [
    SupplierController,
    UsersController,
    ManageProductController,
    InventoryController,
  ],
  providers: [
    SupplierService,
    UsersService,
    ManageProductService,
    InventoryService,
  ],
})
export class AppModule {}
