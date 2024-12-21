

import {IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator'


export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsOptional()
  @IsNumber()
  price?: number;
}