import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Expenses } from '../interfaces/expenses.interface';
import { ExpensesCategoryDto } from '../category/expenses-category/expenses-category.dto';

@Entity('Expenses')
export class ExpensesDto implements Expenses {
  @PrimaryGeneratedColumn()
  expensesID?: number;

  @ApiProperty({ example: 'Electric Bills' })
  @Column({ length: 100 })
  expensesName: string;

  @ApiProperty({ example: '01/12/2022' })
  @Column({ length: 100 })
  date: string;

  @ApiProperty({ example: 'Payment for the elec bilss' })
  @Column({ length: 100 })
  description: string;

  @ApiProperty({ example: '7000' })
  @Column()
  amount: number;

  @ApiProperty({ example: 'sa' })
  @Column({ length: 100 })
  type: string;

  @OneToOne(() => ExpensesCategoryDto)
  @JoinColumn({ name: 'expensesCatId' })
  expensesCategory: ExpensesCategoryDto;
}
