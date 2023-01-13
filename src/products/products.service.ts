import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { productDTO } from './dto/product.dto';
import { Product, ProductDocument } from './schema/productSchema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(productDTO: productDTO): Promise<Product> {
    const productCreated = new this.productModel(productDTO);
    return await productCreated.save();
  }
  async getAll(): Promise<Product[]> {
    return await this.productModel.find();
  }
  async update(_id: string, updateDT0: productDTO): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(_id, updateDT0);
  }
  async delete(id: string) {
    return await this.productModel.findByIdAndDelete(id);
  }
}
