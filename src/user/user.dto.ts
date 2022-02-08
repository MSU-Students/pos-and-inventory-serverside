import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export interface IUser {
  id?: number;
  FName: string;
  MName?: string;
  LName: string;
  username?: string;
  password?: string;
  type?: 'admin' | 'cashier';
  contact?: string;
  email?: string;
  status: 'active' | 'inactive';
}

export class RegisterUserDto implements IUser {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'Basam' })
  @Column({ length: 100 })
  FName: string;

  @ApiProperty({ example: 'Cosain', required: false })
  @Column({ length: 100, nullable: true })
  MName?: string;

  @ApiProperty({ example: 'Serad' })
  @Column({ length: 100 })
  LName: string;

  @ApiProperty({ example: '+639067342939', required: false })
  @Column({ length: 100, nullable: true })
  contact?: string;

  @ApiProperty({ example: 'example@gmail.com', required: false })
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
}

export class LoginUserDto implements IUser {
  id?: number;
  FName: string;
  MName?: string;
  LName: string;
  @ApiProperty()
  username?: string;
  @ApiProperty()
  password?: string;
  type?: 'admin' | 'cashier';
  contact?: string;
  email?: string;
  status: 'active' | 'inactive';
}

export class RefreshDto {
  @ApiProperty({
    required: true,
    minLength: 5,
  })
  refresh_token: string;
}

export class AccessTokenDto {
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  accessToken?: string;
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  refreshToken?: string;
}
