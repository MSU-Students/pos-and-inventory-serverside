import { ApiProperty } from '@nestjs/swagger';
import { Supplier } from '../interfaces/supplier.interface';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ExpensesDto } from './expenses.dto';
import { PurchaseDto } from './purchase.dto';

@Entity('Supplier')
export class SupplierDto implements Supplier {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  supplierID?: number;

  @ApiProperty({ example: 'Basam C. Serad' })
  @Column({ length: 100 })
  supplierName: string;

  @ApiProperty({ example: 'Nestle Company', required: false })
  @Column({ length: 100, nullable: true })
  company: string;

  @ApiProperty({ example: 'basamserad1998@gmail.com', required: false })
  @Column({ length: 100, nullable: true })
  email: string;

  @ApiProperty({ example: '09631358292/+639631358292', required: false })
  @Column({ length: 100, nullable: true })
  contact: string;

  @ApiProperty({ example: 'Dimaluna, Marawi City', required: false })
  @Column({ length: 100, nullable: true })
  address: string;

  @OneToMany(() => ExpensesDto, (expenses) => expenses.supplier, {
    nullable: true,
  })
  expenses: ExpensesDto[];

  @OneToMany(() => PurchaseDto, (purchase) => purchase.supplierPurchase, {
    nullable: true,
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  purchase: PurchaseDto[];
}
