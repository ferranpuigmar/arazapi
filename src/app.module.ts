import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProductModules } from './modules/products/product.module';
import { CartModules } from './modules/cart/cart.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongoDB),
    ProductModules,
    CartModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
