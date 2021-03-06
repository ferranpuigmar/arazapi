import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  cpu: string;

  @Prop()
  ram: string;

  @Prop()
  so: string;

  @Prop()
  resolution: string;

  @Prop()
  battery: string;

  @Prop()
  size: string;

  @Prop()
  weight: number;

  @Prop({ required: true })
  url: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
