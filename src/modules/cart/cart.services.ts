import { AddCartBody } from './cart.controller';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart, CartDocument } from './cart.schema';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

  async addCart(body: AddCartBody): Promise<void> {
    const cart = await this.cartModel.create(body);
    cart.save();
  }

  async getCart(): Promise<{ count: number }> {
    const cartResponse = await this.cartModel.find().exec();
    return {
      count: cartResponse.length ?? 0,
    };
  }
}
