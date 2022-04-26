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
import { ExpensesService } from './expenses/expenses.service';
import { ExpensesController } from './expenses/expenses.controller';
import { ExpensesDto } from './entities/expenses.dto';
import { PurchaseDto } from './entities/purchase.dto';
import { PurchaseService } from './purchase/purchase.service';
import { PurchaseController } from './purchase/purchase.controller';
import { SaleRecordService } from './sale-record/sale-record.service';
import { SaleRecordController } from './sale-record/sale-record.controller';
import { SaleRecordDto } from './entities/sale-record.dto';
import { AuthModule } from './user/auth.module';
import { UserDto, UserController, UserService } from './user';
import { MediaService } from './media/media.service';
import { MediaController } from './media/media.controller';
import { MediaDto } from './entities/media.dto';
import { SaleOrderDto } from './entities/sale-order.dto';
import { CustomerDto } from './entities/customer.dto';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { SaleOrderController } from './sale-order/sale-order.controller';
import { SaleOrderService } from './sale-order/sale-order.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserDto,
      SupplierDto,
      InventoryDto,
      ManageProductDto,
      ExpensesDto,
      PurchaseDto,
      SaleRecordDto,
      MediaDto,
      SaleOrderDto,
      CustomerDto,
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
        ExpensesDto,
        PurchaseDto,
        SaleRecordDto,
        UserDto,
        MediaDto,
        SaleOrderDto,
        CustomerDto,
      ],
      // synchronize: true,
      // dropSchema: true,
    }),
    AuthModule,
  ],
  controllers: [
    SupplierController,
    UserController,
    ManageProductController,
    InventoryController,
    ExpensesController,
    PurchaseController,
    SaleRecordController,
    MediaController,
    CustomerController,
    SaleOrderController,
  ],
  providers: [
    SupplierService,
    UserService,
    ManageProductService,
    InventoryService,
    ExpensesService,
    PurchaseService,
    SaleRecordService,
    MediaService,
    CustomerService,
    SaleOrderService,
  ],
})
export class AppModule {}
