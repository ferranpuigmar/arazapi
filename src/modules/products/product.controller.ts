import { Controller, Get } from '@nestjs/common';
import { productToDTO, productDTO } from './dto/product.dto';
import { ProductsService } from './product.services';

@Controller()
export class ProductsController {
  constructor(private productServices: ProductsService) {}

  @Get('/product')
  async getAllProducts(): Promise<productDTO[]> {
    try {
      const productsRequest = await this.productServices.findAll();
      return productsRequest.map((product) => productToDTO(product));
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
