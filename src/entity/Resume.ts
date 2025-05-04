import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Skill } from "./Skill";

@Entity()
export class Resume{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string

    @Column()
    salary!:number

    @Column()
    schedule!:string

    @Column()
    typeWork!:string

    @Column()
    timeToWork!:string

    @Column()
    travel!:string

    @Column()
    tel!:number

    @Column()
    email!:string

    @ManyToMany(()=>Skill,(skill)=>skill.resume)
    skills!:Skill[]

    @ManyToOne(()=>User,(user)=>user.resume)
    user!:User
}