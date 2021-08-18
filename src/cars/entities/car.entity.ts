import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  brand: string;
  @Prop()
  model: string;
  @Prop()
  version: string;
  @Prop()
  year: number;
  @Prop()
  mileage: string;
  @Prop()
  type_of_exchange: string;
  @Prop()
  sale_price: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
