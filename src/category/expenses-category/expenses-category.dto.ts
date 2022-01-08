import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ExpensesCategory } from './expenses-category.interface';

@Entity('expenses_category')
export class ExpensesCategoryDto implements ExpensesCategory {
  @PrimaryGeneratedColumn()
  expensesCategoryID: number;

  @ApiProperty({ example: 'Utensils' })
  @Column({ length: 100 })
  expensesCategoryName: string;
}
