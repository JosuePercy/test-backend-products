import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entity/product.entity';
import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('')
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto)

  }

  @Put(':id')
  async patch(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(id, updateProductDto);
  }
}
