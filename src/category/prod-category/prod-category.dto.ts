import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProdCategory } from './prod-category.interface';

@Entity('Product_Category')
export class ProdCategoryDto implements ProdCategory {
  @PrimaryGeneratedColumn()
  prodCategoryID: number;

  @ApiProperty({ example: 'Utensils' })
  @Column({ length: 100 })
  prodCategoryName: string;
}
