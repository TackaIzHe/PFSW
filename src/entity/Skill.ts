import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Vacancy } from "./Vacancy"
import { Resume } from "./Resume"

@Entity()
export class Skill{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string

    @ManyToMany(()=>Vacancy,(vacancy)=>vacancy.skills)
    vacancy!:Vacancy[]

    @ManyToMany(()=>Resume,(resume)=>resume.skills)
    resume!:Resume[]
}