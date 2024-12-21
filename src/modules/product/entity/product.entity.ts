import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'interview', name: 'product' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 250, nullable: false })
  name: string;

  @Column({ name: 'description', type: 'varchar', length: 250, nullable: false })
  description: string;

  @Column({ name: 'price', type: 'double', nullable: false })
  price: number;
}
