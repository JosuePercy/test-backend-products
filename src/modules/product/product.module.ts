import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { ProductService } from './product.service';
import { productProvider } from './product.repository';
import { ProductController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService, productProvider],
})
export class ProductModule {}
