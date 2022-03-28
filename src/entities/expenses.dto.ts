import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Expenses } from '../interfaces/expenses.interface';
import { SupplierDto } from './supplier.dto';

@Entity('Expenses')
export class ExpensesDto implements Expenses {
  @PrimaryGeneratedColumn()
  expensesID?: number;

  @ApiProperty({ example: 'Electric Bills' })
  @Column({ length: 100 })
  expensesName: string;

  @ApiProperty()
  @Column({ nullable: true })
  expensesDate: string;

  @ApiProperty({ example: 'Payment for the elec bilss' })
  @Column({ length: 100, nullable: true })
  description: string;

  @ApiProperty({ example: '7000' })
  @Column({ type: 'double' })
  amount: number;

  @ApiProperty({ example: 'Bill', required: false })
  @Column({ nullable: true })
  expensesCategory: string;

  @OneToMany(() => SupplierDto, (supplier) => supplier.expenses)
  @JoinColumn({ name: 'supplierId' })
  supplier: SupplierDto[];

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  supplierId: number;
}
