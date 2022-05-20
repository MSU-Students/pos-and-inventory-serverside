import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SaleOrder } from '../interfaces/saleOrder.interface';
import { ManageProductDto } from './manage-product.dto';
import { SaleRecordDto } from './sale-record.dto';

@Entity('Sale_Order')
export class SaleOrderDto implements SaleOrder {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  order_ID?: number;

  @ApiProperty({ example: 'Regular' })
  @Column()
  orderName: string;

  @ApiProperty({ example: '2' })
  @Column({ type: 'integer' })
  orderQuant: number;

  @ApiProperty({ example: '2' })
  @Column({ type: 'double' })
  orderPrice: number;

  @ApiProperty({ example: 'Regular' })
  @Column()
  orderSize: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  orderCategory: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  orderSubCategory: string;

  @ApiProperty({ example: '2' })
  @Column({ type: 'double' })
  orderSubTotal: number;

  @ApiProperty({ required: false, type: () => SaleRecordDto })
  @ManyToOne(() => SaleRecordDto, (invoice) => invoice.saleOrder, {})
  invoice: SaleRecordDto;

  @ManyToMany(() => ManageProductDto)
  @JoinTable()
  products: ManageProductDto[];
}
