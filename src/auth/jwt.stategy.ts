import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "./jwt-payload.interface";
import { AuthService } from "./auth.service";
//import { PrismaService } from "src/prisma.service";
import { InjectModel } from "@nestjs/mongoose";
import { Auth } from "./auth.model";
import { Model } from "mongoose";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(@InjectModel('Auth') private readonly authModel: Model<Auth>) {
        super({
            secretOrKey: 'SecretJWT',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })

    }

    async validate(payload: JwtPayload) {
        const { login } = payload;
        //const user = await this.prisma.entity.findFirst({ where: { login } });
        const user = await await this.authModel.find({ login: login }).exec();
        if (!user) {
            throw new UnauthorizedException('')
        }
        return user[0];
    }
}