import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { DatabaseModule } from './database.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    InvoiceModule,
    ProductModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
