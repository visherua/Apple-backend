import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from './project.model';

@Module({
    imports: [AuthModule, MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }])],
    providers: [ProjectService],
    controllers: [ProjectController],
})
export class ProjectMpdule { }
