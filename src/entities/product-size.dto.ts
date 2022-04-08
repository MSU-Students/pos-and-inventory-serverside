import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProductSize } from '../interfaces/product-size.interface';
import { ManageProductDto } from './manage-product.dto';

@Entity('product_size')
export class ProductSizeDto implements ProductSize {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  productSizeID?: number;

  @ApiProperty({ example: '1000' })
  @Column()
  price: number;

  @ApiProperty({ example: 'M', required: false })
  @Column({ length: 100, nullable: true })
  size: string;

  @OneToMany(() => ManageProductDto, (manage) => manage.size, {
    nullable: true,
  })
  manage: ManageProductDto[];
}
