import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SellOrder } from '../interfaces/sell-order.interface';
import { ManageProductDto } from './manage-product.dto';
import { SaleRecordDto } from './sale-record.dto';

@Entity('Sale_Order')
export class SaleOrderDto implements SellOrder {
  @PrimaryGeneratedColumn()
  sale_id: number;

  @ApiProperty({ example: '2' })
  @Column({ type: 'integer' })
  quantity: number;

  @ApiProperty({ example: '2' })
  @Column({ type: 'float' })
  price: number;

  @ApiProperty({ example: 'Regular' })
  @Column()
  size: string;

  @ApiProperty()
  @Column({})
  category: string;

  @ApiProperty()
  @Column({})
  subCategory: string;

  @ManyToOne(() => SaleRecordDto, (invoice) => invoice.saleOrder)
  invoice: SaleRecordDto;

  @ManyToMany(() => ManageProductDto)
  @JoinTable()
  products: ManageProductDto[];
}
