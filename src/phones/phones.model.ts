import { Prisma } from '@prisma/client';

export class Phone implements Prisma.UsersCreateInput {
  readonly phone_model: string;
  readonly phone_price: string;
  readonly phone_description: string;
  readonly phone_photo: string;
  readonly phone_discount: string;
}