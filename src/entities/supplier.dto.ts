import { ApiProperty } from '@nestjs/swagger';
import { Supplier } from '../interfaces/supplier.interface';

export class SupplierDto implements Supplier {
  @ApiProperty({ required: false })
  id?: string;
  @ApiProperty()
  name: string;
}
