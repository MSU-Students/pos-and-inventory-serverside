import { ApiProperty } from '@nestjs/swagger';
import { Supplier } from '../interfaces/supplier.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Supplier')
export class SupplierDto implements Supplier {
  @PrimaryGeneratedColumn()
  supplierID: number;

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
}
