import { Injectable } from '@nestjs/common';
import { SupplierDto } from '../entities/supplier.dto';

@Injectable()
export class SupplierService {
  create(newSupplier: SupplierDto): Promise<SupplierDto> {
    throw new Error('Method not implemented.');
  }
}
