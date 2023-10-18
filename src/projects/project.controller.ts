import { Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AppService } from '../app.service';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/project')
//@UseGuards(AuthGuard())
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }

    @Get()
    getAll() {
        return this.projectService.getProjects()
    };
    @Get(':id')
    getOneById(@Param('id') id: string) {
        return this.projectService.getProjectById(id)
    };
    @Put(':id')
    update(@Body() body: any, @Param('id') id: string) {
        return this.projectService.updateById({ id, comment: body.comment, tasks: body.tasks });
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createPhoneDto: CreateProjectDto) {
        console.log('createPhoneDto', createPhoneDto)
        const { name, comment, tasks } = createPhoneDto
        return this.projectService.createProject(name, comment, tasks);
    }
}
