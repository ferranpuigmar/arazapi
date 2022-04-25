import { ProductsService } from './product.services';
import { ProductsController } from './product.controller';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductModules implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply();
  }
}
