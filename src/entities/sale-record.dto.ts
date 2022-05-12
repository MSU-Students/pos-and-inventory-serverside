import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SaleRecord } from '../interfaces/saleRecord.interface';
import { UserDto } from '../user/user.entity';
import { CustomerDto } from './customer.dto';
import { SaleOrderDto } from './sale-order.dto';

@Entity('Sale_Record')
export class SaleRecordDto implements SaleRecord {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  invoiceID?: number;

  @ApiProperty({ example: '12/23/1998' })
  @Column()
  sales_order_created: string;

  @ApiProperty({ example: '150' })
  @Column({ type: 'double' })
  totalAmount: number;

  @ApiProperty({ example: '150' })
  @Column({ type: 'double' })
  payment: number;

  @ApiProperty({ required: false, type: () => UserDto })
  @ManyToOne(() => UserDto, (user) => user.sale, {
    nullable: true,
  })
  user: UserDto;

  @ApiProperty({ required: false, type: () => CustomerDto })
  @ManyToOne(() => CustomerDto, (customer) => customer.sale, {
    nullable: true,
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  customer: CustomerDto;

  @ApiProperty({ required: false, type: () => SaleOrderDto })
  @OneToMany(() => SaleOrderDto, (saleOrder) => saleOrder.invoice, {
    nullable: true,
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  saleOrder: SaleOrderDto[];
}
