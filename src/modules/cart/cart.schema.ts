import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  colorCode: number;

  @Prop({ required: true })
  storageCode: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
