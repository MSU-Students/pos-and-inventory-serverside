import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ManageProduct } from '../interfaces/manage-product.interface';

@Entity('Manage_Product')
export class ManageProductDto implements ManageProduct {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn('uuid')
  product_ID?: string;

  @ApiProperty({ example: 'Black Forest' })
  @Column({ length: 100 })
  productName: string;

  @ApiProperty({ example: 'Large' })
  @Column({ length: 100 })
  productSize: string;

  @ApiProperty({ example: '150' })
  @Column({ type: 'double' })
  productPrice: number;

  @ApiProperty({ example: 'Drinks' })
  @Column()
  productCategory: string;

  @ApiProperty({ example: 'Frappe' })
  @Column()
  productSubCategory: string;

  @ApiProperty({ example: 'Yes' })
  @Column({ length: 100 })
  productAvailability: 'Yes' | 'No';

  @ApiProperty()
  @Column({ nullable: true })
  productDateCreated: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  url: number;
}
