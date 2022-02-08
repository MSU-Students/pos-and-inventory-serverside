import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.entity';
@Injectable()
export class UserService {
  async setCurrentRefreshToken(refreshToken: string, userId: number) {
    const user = await this.findOne(userId);
    if (user) {
      user.refreshToken = refreshToken;
      await this.update(userId, user);
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
  async findOne(id: number): Promise<UserDto> {
    return this.userRepository.findOne(id);
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
