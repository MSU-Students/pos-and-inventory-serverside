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
import { SaleRecord } from '../interfaces/sell-Record.interface';
import { UserDto } from '../user/user.entity';
import { CustomerDto } from './customer.dto';
import { SaleOrderDto } from './sale-order.dto';

@Entity('Sale_Record')
export class SaleRecordDto implements SaleRecord {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn('uuid')
  invoiceID?: string;

  @ApiProperty({ example: '12/23/1998' })
  @Column()
  sales_order_created: string;

  @ApiProperty({ example: '150' })
  @Column({ type: 'double' })
  totalAmount: number;

  @ApiProperty({ required: false, type: () => UserDto })
  @ManyToOne(() => UserDto, (user) => user.sale)
  user: UserDto;

  @ApiProperty({ required: false, type: () => CustomerDto })
  @ManyToOne(() => CustomerDto, (customer) => customer.sale)
  customer: CustomerDto;

  @ApiProperty({ required: false, type: () => SaleOrderDto })
  @OneToMany(() => SaleOrderDto, (saleOrder) => saleOrder.invoice)
  saleOrder: SaleOrderDto[];
}
