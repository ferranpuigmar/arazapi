import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  colors: [
    {
      code: string;
      name: string;
    },
  ];

  @Prop({ required: true })
  quantity: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
