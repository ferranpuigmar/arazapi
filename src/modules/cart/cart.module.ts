import { MongoError } from 'mongodb';
import { CartService } from './cart.services';
import { CartController } from './cart.controller';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModules implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply();
  }
}
