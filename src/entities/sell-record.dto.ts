import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { SellRecord } from '../interfaces/sell-Record.interface';
import { UserDto } from '../user/user.entity';
import { ManageProductDto } from './manage-product.dto';

@Entity('sell_Record')
export class SellRecordDto implements SellRecord {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  invoiceID?: number;

  @CreateDateColumn('')
  invoiceDate: string;

  @ApiProperty({ example: 'Basam' })
  @Column({ length: 100 })
  customerName: string;

  @ApiProperty({ example: '10' })
  @Column()
  transanctionDiscount: number;

  @ApiProperty({ example: '5' })
  @Column()
  tax: number;

  @ApiProperty({ example: '150' })
  @Column({ type: 'double' })
  totalAmount: number;

  @ApiProperty()
  @Column({ nullable: true })
  saleDate: string;

  @OneToOne(() => UserDto)
  @JoinColumn()
  user: UserDto;

  @ManyToOne(() => ManageProductDto, (product) => product.invoice)
  @JoinColumn({ name: 'productId' })
  product: ManageProductDto[];
}
