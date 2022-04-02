import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ManageProduct } from '../interfaces/manage-product.interface';
import { ProdCategoryDto } from '../category/prod-category/prod-category.dto';
import { SellRecordDto } from './sell-record.dto';
import { MediaDto } from './media.dto';
import { ProductSizeDto } from './product-size.dto';

@Entity('Manage_Product')
export class ManageProductDto implements ManageProduct {
  @PrimaryGeneratedColumn('uuid')
  product_ID?: string;

  @ApiProperty({ example: 'Black Forest' })
  @Column({ length: 100 })
  productName: string;

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

  @OneToMany(() => SellRecordDto, (invoice) => invoice.product)
  invoice: SellRecordDto;

  @OneToOne(() => ProdCategoryDto)
  @JoinColumn({ name: 'productCateory_id' })
  prodCategory: ProdCategoryDto;

  @OneToOne(() => MediaDto, { nullable: true })
  @JoinColumn({ name: 'productPicId' })
  media: MediaDto;

  @ManyToOne(() => ProductSizeDto, (size) => size.manage)
  size: ProductSizeDto[];
}
