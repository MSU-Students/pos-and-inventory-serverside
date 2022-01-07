import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierDto } from './entities/supplier.dto';
import { SupplierController } from './supplier/supplier.controller';
import { SupplierService } from './supplier/supplier.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierDto]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pos_and_inventorydb',
      entities: [SupplierDto],
      synchronize: true,
      dropSchema: true,
    }),
  ],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class AppModule {}
