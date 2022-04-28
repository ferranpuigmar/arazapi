import { MongoExceptionFilter } from './../../filters/validation-mongoError.filter';
import { CartService } from './cart.services';
import {
  Body,
  Controller,
  HttpCode,
  Post,
  Get,
  UseFilters,
} from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import { StatusCodes } from 'http-status-codes';
import { AllExceptionsFilter } from 'src/filters/validation-error.filter';

type CartResponse = {
  count: number;
};

export class AddCartBody {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  color: {
    code: string;
    name: string;
  };

  @IsNotEmpty()
  quantity: number;
}

@Controller()
@UseFilters(AllExceptionsFilter)
export class CartController {
  constructor(private cartServices: CartService) {}

  @Post('/cart')
  @HttpCode(StatusCodes.OK)
  async addToCart(
    @Body() { id, color, quantity }: AddCartBody,
  ): Promise<CartResponse> {
    await this.cartServices.addCart({
      id,
      color,
      quantity,
    });
    return await this.cartServices.getCart();
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
