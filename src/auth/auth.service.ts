import { ConflictException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
//import { PrismaService } from 'src/prisma.service';
import { EntityDto } from './dto/entity.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from 'src/projects/project.model';
import { Entity, Auth } from './auth.model';
@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        @InjectModel('Auth') private readonly authModel: Model<Auth>
    ) {

    }
    async signUp(data: Auth): Promise<Array<object>> {
        const credentials: Auth = data;
        try {
            const { password, login } = data;
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = new this.authModel({ password: hashedPassword, login });
            const result = await user.save();
            return result;
        } catch (e) {
            if (e.code === 23505) {
                throw new ConflictException('Username already exixsts')
            }
        }
    }

    async signIn(data: Auth): Promise<{ accessToken: string }> {
        const { login, password } = data;
        const user: any = await this.authModel.find({ login: login }).exec();

        if (user && (await bcrypt.compare(password, user[0].password))) {
            const payload: JwtPayload = { login }
            const accessToken = await this.jwtService.sign(payload)
            return { accessToken }

        } else {
            throw new UnauthorizedException('Password incorrect or user no exists')
        }
    }
}