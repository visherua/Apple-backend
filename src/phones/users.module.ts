import { Module } from '@nestjs/common';
import { PhoneService } from './phones.service';
import { PhoneController } from './phones.controller';
//import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [PhoneService,],
  controllers: [PhoneController],
})
export class UsersModule { }
