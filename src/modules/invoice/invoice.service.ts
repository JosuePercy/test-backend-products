import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entity/invoice.entity';
import { IInvoiceRepository } from './invoice.repository';
import { CreateInvoiceDto } from './dto/create.invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: IInvoiceRepository,
  ) {}

  async getAllInvoices(): Promise<Invoice[]> {
    return this.invoiceRepository.find();
  }

  async createInvoice(data: CreateInvoiceDto): Promise<Invoice> {
    const invoice = this.invoiceRepository.create(data);

    return await this.invoiceRepository.save(invoice);
  }

  async getInvoiceId(id: number): Promise<Invoice> {
    return await this.invoiceRepository.findOneBy({id: id})
  }


}
