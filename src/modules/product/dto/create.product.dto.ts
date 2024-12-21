import { IsNotEmpty, IsNumber, IsString, Min, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  price: number;
}