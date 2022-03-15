import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ManageProduct } from '../interfaces/manage-product.interface';
import { ProdCategoryDto } from '../category/prod-category/prod-category.dto';
import { SellRecordDto } from './sell-record.dto';
import { MediaDto } from './media.dto';

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

  @ApiProperty({ example: 'Yes' })
  @Column({ length: 100 })
  productAvailability: 'Yes' | 'No';

  @OneToOne(() => MediaDto)
  @JoinColumn({ name: 'picture_id' })
  media: MediaDto;

  @OneToMany(() => SellRecordDto, (invoice) => invoice.product)
  invoice: SellRecordDto;

  @OneToOne(() => ProdCategoryDto)
  @JoinColumn({ name: 'productCateory_id' })
  prodCategory: ProdCategoryDto;
}
