import { Product } from '../product.schema';

export type productDTO = Omit<Product, '_id'> & {
  id: string;
};

export const productToDTO = (product: Product): productDTO => {
  return {
    id: product._id.toString(),
    brand: product.brand,
    model: product.model ?? '',
    price: product.price ?? 0,
    cpu: product.cpu ?? '',
    ram: product.ram ?? '',
    so: product.so ?? '',
    resolution: product.resolution ?? '',
    battery: product.battery ?? '',
    size: product.size,
    weight: product.weight ?? 0,
    url: product.url ?? '',
    description: product.description ?? '',
    colors: product.colors,
  };
};
