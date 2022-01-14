import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProductSize } from '../interfaces/product-size.interface';

@Entity('product_size')
export class ProductSizeDto implements ProductSize {
  @PrimaryGeneratedColumn()
  productSizeID: number;

  @ApiProperty({ example: '1000' })
  @Column()
  price: number;

  @ApiProperty({ example: 'M' })
  @Column({ length: 100 })
  size: string;

  @ApiProperty({ example: '01' })
  @Column()
  productID: number;
}
