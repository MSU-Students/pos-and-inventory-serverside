import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto } from '../entities/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersDto)
    private usersRepository: Repository<UsersDto>,
  ) {}

  async create(application: UsersDto): Promise<UsersDto> {
    return this.usersRepository.save(application);
  }
  async findAll(): Promise<UsersDto[]> {
    return this.usersRepository.find();
  }
  async findOne(usersID: number): Promise<UsersDto> {
    return this.usersRepository.findOne(usersID);
  }
  async update(usersID: number, application: UsersDto) {
    return this.usersRepository.update(usersID, application);
  }
  async deleteOne(usersID: number) {
    return this.usersRepository.delete(usersID);
  }
}
