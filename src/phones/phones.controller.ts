import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  HttpCode,
  HttpStatus,
  Header,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { PhoneService } from './phones.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/shop/phones')
@UseGuards(AuthGuard())
export class PhoneController {
  constructor(private readonly PhoneService: PhoneService) { }
  // @Get()
  // async getAll() {
  //   const phones = await this.PhoneService.getAllPhones();
  //   if (!phones.length) {
  //     throw new NotFoundException()
  //   }
  //   return phones
  // }
  // @Get(':id')
  // async getOne(@Param('id') id: string) {
  //   const phones = await this.PhoneService.getPhone(Number(id));
  //   if (!phones) {
  //     throw new NotFoundException();
  //   }
  //   return phones;
  // }
  // @Post()
  // @HttpCode(HttpStatus.CREATED)
  // @Header('Cache-Control', 'none')
  // create(@Body() CreatePhoneDto: CreatePhoneDto) {
  //   return this.PhoneService.createPhone(CreatePhoneDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   try {
  //     return await this.PhoneService.deletePhone(Number(id));
  //   } catch (e) {
  //     throw new NotFoundException(`Phone with id ${id} not found`);
  //   }
  // }
  // //comment
  // @Put(':id')
  // update(@Body() body: UpdatePhoneDto, @Param('id') id: string) {
  //   return this.PhoneService.updatePhone(Number(id), body);
  // }
}
