import { ExpensesCategoryDto } from './category/expenses-category/expenses-category.dto';
import { ProdCategoryDto } from './category/prod-category/prod-category.dto';
import { InventoryCategoryDto } from './category/inventory-category/inventory-category.dto';
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
import { InventoryCategoryService } from './category/inventory-category/inventory-category.service';
import { InventoryCategoryController } from './category/inventory-category/inventory-category.controller';
import { ProdCategoryService } from './category/prod-category/prod-category.service';
import { ProdCategoryController } from './category/prod-category/prod-category.controller';
import { SubprodCategoryService } from './category/subprod-category/subprod-category.service';
import { SubprodCategoryController } from './category/subprod-category/subprod-category.controller';
import { SubprodCategoryDto } from './category/subprod-category/subprod-category.dto';
import { ExpensesCategoryService } from './category/expenses-category/expenses-category.service';
import { ExpensesCategoryController } from './category/expenses-category/expenses-category.controller';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      SupplierDto,
      UsersDto,
      InventoryDto,
      ManageProductDto,
      InventoryCategoryDto,
      ProdCategoryDto,
      SubprodCategoryDto,
      ExpensesCategoryDto,
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pos_and_inventorydb',
      entities: [
        SupplierDto,
        UsersDto,
        InventoryDto,
        ManageProductDto,
        InventoryCategoryDto,
        ProdCategoryDto,
        SubprodCategoryDto,
        ExpensesCategoryDto,
        SubprodCategoryDto,
      ],
      synchronize: true,
      dropSchema: true,
    }),
  ],
  controllers: [
    SupplierController,
    UsersController,
    ManageProductController,
    InventoryController,
    InventoryCategoryController,
    ProdCategoryController,
    SubprodCategoryController,
    ExpensesCategoryController,
  ],
  providers: [
    SupplierService,
    UsersService,
    ManageProductService,
    InventoryService,
    InventoryCategoryService,
    ProdCategoryService,
    SubprodCategoryService,
    ExpensesCategoryService,
  ],
})
export class AppModule {}
