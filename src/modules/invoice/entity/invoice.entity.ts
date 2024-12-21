import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'interview', name: 'invoice' })
export class Invoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'employee_id', type: 'int', unsigned: true, nullable: false })
  employeeId: number;

  @Column({ name: 'series', type: 'varchar', length: 250, nullable: false })
  series: string;

  @Column({ name: 'correlative', type: 'varchar', length: 50, nullable: false })
  correlative: string;

  @Column({ name: 'receiver_ruc', type: 'varchar', length: 11, nullable: false })
  receiverRuc: string;

  @Column({ name: 'issuer_ruc', type: 'varchar', length: 11, nullable: false })
  issuerRuc: string;

  @Column({ name: 'receiver_social_name', type: 'varchar', length: 250, nullable: false })
  receiverSocialName: string;

  @Column({ name: 'total_price', type: 'double', nullable: false })
  totalPrice: number;

  @Column({ name: 'issuance_date', type: 'date', nullable: false })
  issuanceDate: Date;
}
