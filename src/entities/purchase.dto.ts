import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Purchase } from '../interfaces/purchase.interface';
import { SupplierDto } from '../entities/supplier.dto';

@Entity('Purchase')
export class PurchaseDto implements Purchase {
  @PrimaryGeneratedColumn()
  purchaseID?: number;

  @ApiProperty({ default: 'Chocolate Powder' })
  @Column({ length: 100 })
  purchaseProduct: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  purchaseDate: string;

  @ApiProperty({ default: 'Ingredients' })
  @Column({ length: 100 })
  purchaseCategory: string;

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
  @Column({ type: 'double' })
  purchaseAmount: number;

  @ManyToOne(
    () => SupplierDto,
    (supplierPurchase) => supplierPurchase.purchase,
    {
      nullable: true,
    },
  )
  supplierPurchase: SupplierDto;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  supplierPurchaseSupplierID: number;
}
