//import { Prisma } from '@prisma/client';
import * as mongoose from 'mongoose';
// export class Entity implements Prisma.EntityCreateInput {
//     readonly readonly login: string;
//     readonly password: string;: string;
//     readonly password: string;

// }
//


export const Entity = new mongoose.Schema({
    login: { type: String, unique: true },
    password: { type: String },
})

export interface Auth {
    login: string;
    password: string;
}