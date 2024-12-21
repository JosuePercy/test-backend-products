import { Provider } from '@nestjs/common';
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { Invoice } from './entity/invoice.entity';
import { DataSource, Repository } from 'typeorm';

export const invoiceProvider: Provider = {
  provide: getRepositoryToken(Invoice),
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(Invoice).extend(customInvoiceRepository),
  inject: [getDataSourceToken()],
};

export interface IInvoiceRepository extends Repository<Invoice> {
  this: Repository<Invoice>;
}

export const customInvoiceRepository: Pick<IInvoiceRepository, any> = {};
