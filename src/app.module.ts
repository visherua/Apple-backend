import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './phones/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectMpdule } from './projects/project.module';
@Module({
  imports: [AuthModule, ProjectMpdule, MongooseModule.forRoot('mongodb+srv://vito:12345678$@applecluster.cifwaaa.mongodb.net/nestjs-demo?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
