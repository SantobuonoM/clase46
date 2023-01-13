import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { productDTO } from './dto/product.dto';
  import { ProductsService } from './products.service';
  import { Product } from './schema/productSchema';
  
  @Controller('products')
  export class ProductsController {
    constructor(private readonly ProductService: ProductsService) {}
  
    @Post('/create')
    async create(@Body() createProduct: productDTO): Promise<Product> {
      return await this.ProductService.create(createProduct);
    }
    @Get('/list')
    async getAll(): Promise<Product[]> {
      return await this.ProductService.getAll();
    }
    @Put('/update/:_id')
    async update(
      @Param() _id: string,
      @Body() updateDTO: productDTO,
    ): Promise<Product> {
      return await this.ProductService.update(_id, updateDTO);
    }
    @Delete('/delete/:_id')
    async delete(@Param() _id: string) {
      return await this.ProductService.delete(_id);
    }
  }
  