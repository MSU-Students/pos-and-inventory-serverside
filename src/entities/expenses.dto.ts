import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Expenses } from '../interfaces/expenses.interface';
import { SupplierDto } from './supplier.dto';

@Entity('Expenses')
export class ExpensesDto implements Expenses {
  @ApiProperty({ required: false })
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

  @ApiProperty({ required: false, type: () => SupplierDto })
  @ManyToOne(() => SupplierDto, (supplier) => supplier.expenses, {
    nullable: true,
  })
  supplier: SupplierDto;
}
