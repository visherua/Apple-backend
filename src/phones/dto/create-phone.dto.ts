
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePhoneDto {
  @IsNotEmpty()
  @IsString()
  readonly phone_model: string;
  @IsNotEmpty()
  @IsString()
  readonly phone_price: string;
  @IsNotEmpty()
  @IsString()
  readonly phone_description: string;
  @IsNotEmpty()
  @IsString()
  readonly phone_photo: string;
  @IsNotEmpty()
  @IsString()
  readonly phone_discount: string;
}