import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SellRecord } from '../interfaces/sell-Record.interface';
import { UserDto } from '../user/user.entity';
import { CustomerDto } from './customer.dto';
import { SaleOrderDto } from './sale-order.dto';

@Entity('Sale_Record')
export class SellRecordDto implements SellRecord {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn('uuid')
  invoiceID?: string;

  @ApiProperty({ example: '12/23/1998' })
  @Column()
  sales_order_created: string;

  @ApiProperty({ example: '150' })
  @Column({ type: 'double' })
  totalAmount: number;

  @OneToOne(() => UserDto)
  @JoinColumn()
  user: UserDto;

  @OneToOne(() => CustomerDto)
  @JoinColumn()
  customer: CustomerDto;

  @ApiProperty({ required: false, type: () => SaleOrderDto })
  @OneToMany(() => SaleOrderDto, (saleOrder) => saleOrder.invoice)
  @JoinColumn({ name: 'saleOrderID' })
  saleOrder: SaleOrderDto[];
}
