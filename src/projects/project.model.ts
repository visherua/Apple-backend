import * as mongoose from 'mongoose';
export const ProjectSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    comment: { type: String },
    tasks: { type: String } //JSON
})

export interface Project {
    id: string;
    userId: string;
    name: string;
    comment: string;
}