import { Provider } from '@nestjs/common';
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Product } from './entity/product.entity';

export const productProvider: Provider = {
  provide: getRepositoryToken(Product),
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(Product).extend(customProductRepository),
  inject: [getDataSourceToken()],
};

export interface IProductRepository extends Repository<Product> {
  this: Repository<Product>;
}

export const customProductRepository: Pick<IProductRepository, any> = {};
