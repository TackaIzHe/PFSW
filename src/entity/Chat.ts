import {
    Entity, 
    PrimaryGeneratedColumn,
    Column,
 } from "typeorm";
import 'reflect-metadata'

@Entity()
export class Chat{
    @PrimaryGeneratedColumn()
    id!:number;
}