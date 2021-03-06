import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Inventory } from '../interfaces/inventory.interface';

@Entity('Inventory')
export class InventoryDto implements Inventory {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  itemCode?: number;

  @ApiProperty({ example: 'Chocolate Powder' })
  @Column({ length: 100 })
  itemName: string;

  @ApiProperty({ example: '23' })
  @Column({ type: 'int' })
  itemQuantProd: number;

  @ApiProperty({ example: '23' })
  @Column({ type: 'int' })
  itemQuantStatus: number;

  @ApiProperty({ example: 'Available' })
  @Column({ nullable: false })
  itemStatus: string;

  @ApiProperty({ example: 'Kilogram (kg)' })
  @Column({ length: 100 })
  itemUnitProd: string;

  @ApiProperty({ example: '02/16/2023' })
  @Column({ length: 100, nullable: true })
  itemExpiryDate: string;

  @ApiProperty({ example: 'Utensil' })
  @Column({ nullable: true })
  itemCategory: string;

  @ApiProperty()
  @Column({ nullable: true })
  itemDateCreated: string;

  @ApiProperty()
  @Column({ nullable: true })
  itemConsumeAt: string;
}
