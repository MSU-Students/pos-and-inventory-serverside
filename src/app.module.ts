import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupplierController } from './supplier/supplier.controller';
import { SupplierService } from './supplier/supplier.service';

@Module({
  imports: [],
  controllers: [AppController, SupplierController],
  providers: [AppService, SupplierService],
})
export class AppModule {}
