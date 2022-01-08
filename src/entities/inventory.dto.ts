import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Inventory } from '../interfaces/inventory.interface';

@Entity('Inventory')
export class InventoryDto implements Inventory {
  @PrimaryGeneratedColumn('uuid')
  itemCode?: string;

  @ApiProperty({ example: 'Chocolate Powder' })
  @Column({ length: 100 })
  itemName: string;

  @ApiProperty({ example: '23' })
  @Column({ type: 'int' })
  itemQuantProd: number;

  @ApiProperty({ example: 'Kilogram (kg)' })
  @Column({ length: 100 })
  itemUnitProd: string;

  @ApiProperty({ example: '23' })
  @Column({ length: 100 })
  itemCategory: string;

  @ApiProperty({ example: '02/16/2023' })
  @Column({ length: 100 })
  itemExpiryDate: string;

  @CreateDateColumn('')
  itemDateCreated: Date;
}
