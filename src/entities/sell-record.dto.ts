import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SellRecord } from '../interfaces/sell-Record.interface';

@Entity('sell_Record')
export class SellRecordDto implements SellRecord {
  @PrimaryGeneratedColumn()
  invoiceID: number;

  @CreateDateColumn('')
  invoiceDate: string;

  @Column()
  userID: number;

  @ApiProperty({ example: 'Basam' })
  @Column({ length: 100 })
  customerName: string;

  @Column()
  productID: number;

  @ApiProperty({ example: '10' })
  @Column()
  transanctionDiscount: number;

  @ApiProperty({ example: '5' })
  @Column()
  tax: number;

  @ApiProperty({ example: '150' })
  @Column()
  totalAmount: number;
}
