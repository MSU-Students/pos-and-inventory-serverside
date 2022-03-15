import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MediaDto } from '../entities/media.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(MediaDto) private mediaRepository: Repository<MediaDto>,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    const createFile = this.mediaRepository.create({
      data: file.buffer,
      filename: file.filename || file.originalname,
      mimeType: file.mimetype,
    });
    return await this.mediaRepository.save(createFile);
  }

  async update(id: number, file: Express.Multer.File) {
    const createFile = this.mediaRepository.create({
      data: file.buffer,
      filename: file.filename || file.originalname,
      mimeType: file.mimetype,
    });
    return await this.mediaRepository.update(id, createFile);
  }
  async findOne(id: number): Promise<MediaDto> {
    return await this.mediaRepository.findOne(id);
  }

  async deleteOne(id: number) {
    return this.mediaRepository.delete(id);
  }
}
export default MediaService;
