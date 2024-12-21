import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from './entity/invoice.entity';
import { CreateInvoiceDto } from './dto/create.invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}
  @Get('')
  async getAllInvoices(): Promise<Invoice[]> {
    return this.invoiceService.getAllInvoices();
  }

  @Post()
  async createInvoice(@Body() createInvoiDto: CreateInvoiceDto): Promise<Invoice> {
      return await this.invoiceService.createInvoice(createInvoiDto)
  }

  @Get(':id')
  async getInvoiceId(@Param('id') id: number): Promise<Invoice> {
    return this.invoiceService.getInvoiceId(id)
  }

}
