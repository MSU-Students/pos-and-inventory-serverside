import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProductSize } from '../interfaces/product-size.interface';
import { ManageProductDto } from './manage-product.dto';

@Entity('product_size')
export class ProductSizeDto implements ProductSize {
  @PrimaryGeneratedColumn()
  productSizeID: number;

  @ApiProperty({ example: '1000' })
  @Column()
  price: number;

  @ApiProperty({ example: 'M', required: false })
  @Column({ length: 100, nullable: true })
  size: string;

  @OneToOne(() => ManageProductDto)
  @JoinColumn({ name: 'productId' })
  productId: ManageProductDto;
}
