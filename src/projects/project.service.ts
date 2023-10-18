import { Injectable } from '@nestjs/common';
import { Project } from './project.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProjectService {

    private projects: Project[] = []

    constructor(@InjectModel('Project') private readonly projectModel: Model<Project>) { }

    async getProjects() {
        const projects = await this.projectModel.find().exec();
        return projects;
    }
    async getProjectById(id: string) {
        const project = await this.projectModel.find({ _id: id }).exec();
        return project;
    }

    async createProject(name: string, comment: string, tasks: string) {
        const newProject = new this.projectModel({ name, comment, tasks: tasks });
        const result = await newProject.save()
        return result;

    }
    async updateById({ id, comment, tasks }) {

        const project: any = {}

        if (comment) {
            project.comment = comment
        }
        if (tasks) {
            project.tasks = tasks;
        }
        const updatedProject = await this.projectModel.findOneAndUpdate({ _id: id }, project).exec();
        return updatedProject;
    }
}
