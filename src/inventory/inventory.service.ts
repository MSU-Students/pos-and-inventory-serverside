import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { InventoryDto } from '../entities/inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(InventoryDto)
    private inventoryRepository: Repository<InventoryDto>,
  ) {}

  async create(application: InventoryDto): Promise<InventoryDto> {
    return this.inventoryRepository.save(application);
  }
  async findAll(): Promise<InventoryDto[]> {
    return this.inventoryRepository.find();
  }
  async filterItem(keyword: string): Promise<InventoryDto[]> {
    return this.inventoryRepository.find({
      where: { itemName: Like(`%${keyword}%`) },
    });
  }
  async findOne(itemCode: string): Promise<InventoryDto> {
    return this.inventoryRepository.findOne(itemCode);
  }
  async update(itemCode: string, application: InventoryDto) {
    return this.inventoryRepository.update(itemCode, application);
  }
  async deleteOne(itemCode: string) {
    return this.inventoryRepository.delete(itemCode);
  }
}
