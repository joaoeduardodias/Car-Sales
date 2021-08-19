import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  // brand: string;
  // model: string;
  // version: string;
  // year: number;
  // mileage: string;
  // type_of_exchange: string;
  // sale_price: number;
}
