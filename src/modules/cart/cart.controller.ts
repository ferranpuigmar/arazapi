import { CartService } from './cart.services';
import { Body, Controller, HttpCode, Post, Get } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import { StatusCodes } from 'http-status-codes';

type CartResponse = {
  count: number;
};

export class AddCartBody {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  colorCode: number;

  @IsNotEmpty()
  storageCode: number;
}

@Controller()
export class CartController {
  constructor(private cartServices: CartService) {}

  @Post('/cart')
  @HttpCode(StatusCodes.OK)
  async addToCart(
    @Body() { id, colorCode, storageCode }: AddCartBody,
  ): Promise<CartResponse> {
    try {
      await this.cartServices.addCart({
        id,
        colorCode,
        storageCode,
      });
      return await this.cartServices.getCart();
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/cart')
  @HttpCode(StatusCodes.OK)
  async getCart(): Promise<CartResponse> {
    try {
      return await this.cartServices.getCart();
    } catch (error) {
      console.log(error);
    }
  }
}
