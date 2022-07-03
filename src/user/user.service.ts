import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.entity';
@Injectable()
export class UserService {
  async setCurrentRefreshToken(refreshToken: string, id: number) {
    const user = await this.findOne(id);
    if (user) {
      user.refreshToken = refreshToken;
      await this.update(id, user);
    }
  }
  constructor(
    @InjectRepository(UserDto) private userRepository: Repository<UserDto>,
  ) {}
  async create(user: UserDto): Promise<UserDto> {
    return this.userRepository.save(user);
  }
  async findAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }
  async findOne(id: number) {
    if (id) {
      return this.userRepository.findOne(id);
    }
  }
  async findByUsername(username: string): Promise<UserDto> {
    return this.userRepository.findOne({ username });
  }

  async update(id: number, user: UserDto) {
    return this.userRepository.update(id, user);
  }
  async deleteOne(id: number) {
    return this.userRepository.delete(id);
  }
}
