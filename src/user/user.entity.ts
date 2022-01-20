import { ApiProperty } from '@nestjs/swagger';
import { Users } from '../interfaces/users.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserDto implements Users {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'Basam' })
  @Column({ length: 100 })
  FName: string;

  @ApiProperty({ example: 'Cosain' })
  @Column({ length: 100, nullable: true })
  MName?: string;

  @ApiProperty({ example: 'Serad' })
  @Column({ length: 100 })
  LName: string;

  @ApiProperty({ example: '+639067342939' })
  @Column({ length: 100, nullable: true })
  contact?: string;

  @ApiProperty({ example: 'example@gmail.com' })
  @Column({ length: 100, nullable: true })
  email?: string;

  @ApiProperty({ example: 'admin' })
  @Column({ length: 100 })
  type: 'admin' | 'cashier';

  @ApiProperty({ example: 'active' })
  @Column({ length: 100 })
  status: 'active' | 'inactive';

  @ApiProperty({ example: 'user' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ example: 'password' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ required: false })
  @Column({ length: 255, default: '' })
  refreshToken?: string;
}
