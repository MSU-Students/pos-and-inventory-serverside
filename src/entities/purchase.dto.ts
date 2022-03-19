import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Purchase } from '../interfaces/purchase.interface';
import { SupplierDto } from '../entities/supplier.dto';
import { InventoryCategoryDto } from 'src/category/inventory-category/inventory-category.dto';

@Entity('Purchase')
export class PurchaseDto implements Purchase {
  @PrimaryGeneratedColumn()
  purchaseID: number;

  @ApiProperty({ default: 'Chocolate Powder' })
  @Column({ length: 100 })
  purchaseProduct: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  purchaseDate: string;

  @ApiProperty({ default: 23, required: false })
  @Column({ nullable: true })
  productQuantity?: number;

  @ApiProperty({ default: 'Packs', required: false })
  @Column({ length: 100, nullable: true })
  productUnit: string;

  @ApiProperty({ default: 'Pending' })
  @Column({ length: 100 })
  purchaseStatus: string;

  @ApiProperty({ default: '7000' })
  @Column()
  purchaseAmount: number;

  @OneToOne(() => SupplierDto)
  @JoinColumn({ name: 'supplierId' })
  supplier: SupplierDto;
  @ApiProperty()
  @Column({ nullable: true })
  public supplierId?: number;

  @OneToOne(() => InventoryCategoryDto)
  @JoinColumn({ name: 'inventoryCategoryID' })
  inventoryCategory: InventoryCategoryDto;
  @ApiProperty()
  @Column({ nullable: true })
  public inventoryCategoryID?: number;
}
