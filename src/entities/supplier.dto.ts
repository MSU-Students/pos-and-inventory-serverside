import { ApiProperty } from '@nestjs/swagger';
import { Supplier } from '../interfaces/supplier.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Supplier')
export class SupplierDto implements Supplier {
  @PrimaryGeneratedColumn()
  supplierID: number;

  @ApiProperty({ example: 'Basam C. Serad' })
  @Column({ length: 100 })
  supplierName: string;

  @ApiProperty({ example: 'Nestle Company' })
  @Column({ length: 100 })
  company: string;

  @ApiProperty({ example: 'basamserad1998@gmail.com' })
  @Column({ length: 100 })
  email: string;

  @ApiProperty({ example: '09631358292/+639631358292' })
  @Column()
  contact: string;

  @ApiProperty({ example: 'Dimaluna, Marawi City' })
  @Column()
  address: string;
}
