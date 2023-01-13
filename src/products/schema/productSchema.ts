import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;  
  @Prop()
  description: string;
  @Prop()
  image: string;
  @Prop()
  price: Number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
