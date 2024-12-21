



export class CreateInvoiceDto {

  employeeId: number;
  
  series: string;

  correlative: string;

  receiverRuc: string;

  issuerRuc: string;

  receiverSocialName: string;

  totalPrice: number;

  issuanceDate: Date;

}