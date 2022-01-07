import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from '../interfaces/users.interface';

@Entity('Users')
export class UsersDto implements Users {
  @PrimaryGeneratedColumn()
  userID?: number;

  @ApiProperty({ example: 'Basam' })
  @Column({ length: 100 })
  FName: string;

  @ApiProperty({ example: 'C.' })
  @Column({ length: 100 })
  MName: string;

  @ApiProperty({ example: 'Serad' })
  @Column({ length: 100 })
  LName: string;

  @ApiProperty({ example: 'Admin' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ example: 'admin' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ example: 'basamserad1998@gmail.com' })
  @Column({ length: 100 })
  email: string;

  @ApiProperty({ example: 'Admin' })
  @Column()
  role: 'Admin' | 'Cashier';

  @ApiProperty({ example: '01/07/2022' })
  @Column({ length: 100 })
  dateCreated: string;

  @ApiProperty({ example: 'Active' })
  @Column()
  status: 'Active' | 'Inactive' | 'Banned';
}
