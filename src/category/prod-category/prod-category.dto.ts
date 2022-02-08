import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProdCategory } from './prod-category.interface';
import { SubprodCategoryDto } from '../subprod-category/subprod-category.dto';

@Entity('Product_Category')
export class ProdCategoryDto implements ProdCategory {
  @PrimaryGeneratedColumn()
  Id: number;

  @ApiProperty({ example: 'Utensils' })
  @Column({ length: 100 })
  prodCategoryName: string;

  @OneToMany(() => SubprodCategoryDto, (subProd) => subProd.prodCategory)
  subProdCat: SubprodCategoryDto[];
}
