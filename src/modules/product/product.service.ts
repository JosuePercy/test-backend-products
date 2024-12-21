import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { IProductRepository } from './product.repository';
import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: IProductRepository,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async updateProduct(id: number, body: UpdateProductDto): Promise<Product> {
    try {
      const product = await this.productRepository.findOneOrFail({
        where: {
          id,
        },
      });
      if (body.name) product.name = body.name;
      if (body.description) product.description = body.description;
      if (body.price) product.price = body.price;
      const savedProduct = await this.productRepository.save(product);
      return savedProduct;
    } catch (error) {
      if (error.name === 'EntityNotFoundError') {
        throw new NotFoundException(`Product with ID ${id} not found.`);
      }
      throw new InternalServerErrorException(
        'An unexpected error occurred while updating the product.',
      );
    }
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const newProduct = this.productRepository.create(createProductDto);
      return await this.productRepository.save(newProduct);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error al crear el producto. Por favor, inténtalo nuevamente.',
      );
    }
  }
}
