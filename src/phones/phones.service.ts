import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Phone } from './phones.model';

@Injectable()
export class PhoneService {
  //constructor(private prisma: PrismaService) { }

  // async getAllPhones(): Promise<Phone[]> {
  //   return this.prisma.users.findMany();
  // }
  // async getPhone(id: number): Promise<Phone | null> {
  //   return this.prisma.users.findUnique({ where: { id: Number(id) } });
  // }
  // async createPhone(data: Phone): Promise<Phone> {
  //   return this.prisma.users.create({ data });
  // }
  // async updatePhone(id: number, data: Phone): Promise<Phone> {
  //   return this.prisma.users.update({
  //     where: { id: Number(id) },
  //     data: { ...data },
  //   });
  // }

  // async deletePhone(id: number): Promise<Phone> {
  //   return this.prisma.users.delete({
  //     where: { id: Number(id) },
  //   });
  //}
}
