import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from '../interfaces/customer.interface';
import { SaleRecordDto } from './sale-record.dto';

@Entity('Customer')
export class CustomerDto implements Customer {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ default: 'Sam' })
  @Column()
  customerName: string;

  @ApiProperty({ default: '12/23/1998' })
  @Column()
  date_created: string;

  @OneToMany(() => SaleRecordDto, (sale) => sale.customer)
  sale: SaleRecordDto[];
}
