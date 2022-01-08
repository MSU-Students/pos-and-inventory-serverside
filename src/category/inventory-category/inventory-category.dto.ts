import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { InventoryCategory } from './inventory-category.interface';

@Entity('inventory_category')
export class InventoryCategoryDto implements InventoryCategory {
  @PrimaryGeneratedColumn()
  categoryID: number;

  @ApiProperty({ example: 'Utensils' })
  @Column({ length: 100 })
  categoryName: string;

  @ApiProperty({ example: '200' })
  @Column()
  totalProd: number;

  @ApiProperty({ example: '15000' })
  @Column()
  stockQuantity: number;
}
