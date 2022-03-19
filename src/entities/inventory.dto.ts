import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Inventory } from '../interfaces/inventory.interface';
import { InventoryCategoryDto } from '../category/inventory-category/inventory-category.dto';

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

  @ApiProperty({ example: 'Kilogram (kg)', required: false })
  @Column({ length: 100 })
  itemUnitProd: string;

  @ApiProperty({ example: '02/16/2023', required: false })
  @Column({ length: 100, nullable: true })
  itemExpiryDate: string;

  @ApiProperty()
  @Column({ nullable: true })
  itemDateCreated: Date;

  @OneToOne(() => InventoryCategoryDto)
  @JoinColumn({ name: 'InventoryCatId' })
  inventoryCat: InventoryCategoryDto;
}
