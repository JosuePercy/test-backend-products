import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entity/invoice.entity';
import { InvoiceService } from './invoice.service';
import { invoiceProvider } from './invoice.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice])],
  controllers: [InvoiceController],
  providers: [InvoiceService, invoiceProvider],
})
export class InvoiceModule {}
