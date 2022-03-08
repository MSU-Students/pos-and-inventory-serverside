import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SubprodCategory } from './subprod-category.interface';
import { ProdCategoryDto } from '../prod-category/prod-category.dto';
@Entity('subproduct_category')
export class SubprodCategoryDto implements SubprodCategory {
  @PrimaryGeneratedColumn()
  subProdCategoryID: number;

  @ApiProperty({ example: 'Frappe' })
  @Column({ length: 100 })
  subProdName: string;

  @JoinColumn({ name: 'productId' })
  @ManyToOne(() => ProdCategoryDto, (prodCategory) => prodCategory.subProdCat)
  prodCategory: ProdCategoryDto[];
}
