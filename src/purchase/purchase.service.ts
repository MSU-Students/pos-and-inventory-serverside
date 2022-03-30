import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { equal } from 'joi';
import { Equal, Like, Repository } from 'typeorm';
import { PurchaseDto } from '../entities/purchase.dto';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(PurchaseDto)
    private purchaseRepository: Repository<PurchaseDto>,
  ) {}

  async create(application: PurchaseDto): Promise<PurchaseDto> {
    return this.purchaseRepository.save(application);
  }
  async findAll(): Promise<PurchaseDto[]> {
    return this.purchaseRepository.find({
      relations: ['supplierPurchase'],
    });
  }
  async findOne(purchaseID: number): Promise<PurchaseDto> {
    return this.purchaseRepository.findOne(purchaseID);
  }

  async filter(keyword: string): Promise<PurchaseDto[]> {
    return this.purchaseRepository.find({
      relations: ['supplierPurchase'],
      select: ['purchaseProduct'],
      where: { purchaseStatus: Like(`%${keyword}%`) },
    });
  }
  async update(purchaseID: number, application: PurchaseDto) {
    return this.purchaseRepository.update(purchaseID, application);
  }
  async deleteOne(purchaseID: number) {
    return this.purchaseRepository.delete(purchaseID);
  }
}
