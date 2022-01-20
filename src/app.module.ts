import { ExpensesCategoryDto } from './category/expenses-category/expenses-category.dto';
import { ProdCategoryDto } from './category/prod-category/prod-category.dto';
import { InventoryCategoryDto } from './category/inventory-category/inventory-category.dto';
import { ManageProductDto } from './entities/manage-product.dto';
import { InventoryDto } from './entities/inventory.dto';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierDto } from './entities/supplier.dto';
import { SupplierController } from './supplier/supplier.controller';
import { SupplierService } from './supplier/supplier.service';
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
import { ProductSizeService } from './product-size/product-size.service';
import { ProductSizeController } from './product-size/product-size.controller';
import { ProductSizeDto } from './entities/product-size.dto';
import { ExpensesService } from './expenses/expenses.service';
import { ExpensesController } from './expenses/expenses.controller';
import { ExpensesDto } from './entities/expenses.dto';
import { PurchaseDto } from './entities/purchase.dto';
import { PurchaseService } from './purchase/purchase.service';
import { PurchaseController } from './purchase/purchase.controller';
import { SellRecordService } from './sell-record/sell-record.service';
import { SellRecordController } from './sell-record/sell-record.controller';
import { SellRecordDto } from './entities/sell-record.dto';
import { AuthModule } from './user/auth.module';
import { UserDto, UserController, UserService } from './user';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserDto,
      SupplierDto,
      InventoryDto,
      ManageProductDto,
      InventoryCategoryDto,
      ProdCategoryDto,
      SubprodCategoryDto,
      ExpensesCategoryDto,
      ProdCategoryDto,
      ProductSizeDto,
      ExpensesDto,
      PurchaseDto,
      SellRecordDto,
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
        InventoryDto,
        ManageProductDto,
        InventoryCategoryDto,
        ProdCategoryDto,
        SubprodCategoryDto,
        ExpensesCategoryDto,
        SubprodCategoryDto,
        ProductSizeDto,
        ExpensesDto,
        PurchaseDto,
        SellRecordDto,
        UserDto,
      ],
      synchronize: true,
      dropSchema: true,
    }),
    AuthModule,
  ],
  controllers: [
    SupplierController,
    UserController,
    ManageProductController,
    InventoryController,
    InventoryCategoryController,
    ProdCategoryController,
    SubprodCategoryController,
    ExpensesCategoryController,
    ProductSizeController,
    ExpensesController,
    PurchaseController,
    SellRecordController,
  ],
  providers: [
    SupplierService,
    UserService,
    ManageProductService,
    InventoryService,
    InventoryCategoryService,
    ProdCategoryService,
    SubprodCategoryService,
    ExpensesCategoryService,
    ProductSizeService,
    ExpensesService,
    PurchaseService,
    SellRecordService,
  ],
})
export class AppModule {}
