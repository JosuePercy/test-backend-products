import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './modules/invoice/entity/invoice.entity';
import { Product } from './modules/product/entity/product.entity';
import { envs } from './config/envs';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envs.database.host,
      port: envs.database.port,
      username: envs.database.username,
      database: envs.database.name,
      entities: [Invoice, Product],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}

console.log(envs.database.host)
console.log(envs.database.name)
console.log(envs.database.password)