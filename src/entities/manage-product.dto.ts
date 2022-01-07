import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ManageProduct } from '../interfaces/manage-product.interface';

@Entity('Manage_Product')
export class ManageProductDto implements ManageProduct {
  @PrimaryGeneratedColumn('uuid')
  product_ID?: string;

  @ApiProperty({ example: 'Black Forest' })
  @Column({ length: 100 })
  productName: string;

  @ApiProperty({ example: '150' })
  @Column({ type: 'int' })
  productPrice: number;

  @ApiProperty({ example: 'Beverage/Drinks' })
  @Column({ length: 100 })
  productCategory: string;

  @ApiProperty({ example: 'Frappe' })
  @Column({ length: 100 })
  productSubCategory: string;

  @ApiProperty({ example: 'Yes' })
  @Column({ length: 100 })
  productAvailability: 'Yes' | 'No';
}
