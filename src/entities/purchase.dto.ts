import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Purchase } from '../interfaces/purchase.interface';
import { SupplierDto } from '../entities/supplier.dto';

@Entity('Purchase')
export class PurchaseDto implements Purchase {
  @PrimaryGeneratedColumn()
  purchaseID: number;

  @ApiProperty({ example: 'Basam C. Serad' })
  @Column({ length: 100 })
  supplierName: string;

  @ApiProperty({ example: 'Chocolate Powder' })
  @Column({ length: 100 })
  purchaseProduct: string;

  @CreateDateColumn()
  purchaseDate: Date;

  @ApiProperty({ example: 'Pending' })
  @Column({ length: 100 })
  purchaseStatus: string;

  @ApiProperty({ example: '7000' })
  @Column()
  purchaseAmount: number;

  @OneToOne(() => SupplierDto)
  @JoinColumn({ name: 'supplierId' })
  supplier: SupplierDto;
}
