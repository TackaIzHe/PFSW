import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Specialization } from "./Specialization"
import { Skill } from "./Skill"
import { Employer } from "./Employer"

@Entity()
export class Vacancy{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string

    @ManyToOne(()=>Specialization,(specialization)=>specialization.vacancy)
    specialization!:Specialization

    @Column()
    exp!:string

    @Column()
    typeWork!:string

    @Column()
    hiringFormat!:string

    @Column()
    schedule!:string

    @Column()
    workingHours!:number

    @Column()
    adress!:string

    @Column()
    city!:string

    @Column()
    salary!:number

    @Column()
    payoutFrequency!:number

    @Column()
    description!:string

    @ManyToMany(()=>Skill,(skill)=>skill.vacancy)
    skills!:Skill[]

    @ManyToOne(()=>Employer,(employer)=>employer.vacancy)
    employer!:Employer
}