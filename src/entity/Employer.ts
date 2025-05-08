import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Vacancy } from "./Vacancy"

@Entity()
export class Employer{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string

    @Column()
    img!:string

    @Column()
    tel!:number

    @Column()
    email!:string

    @Column()
    password!:string

    @OneToMany(()=>Vacancy,(vacancy)=>vacancy.employer)
    vacancy!:Vacancy[]
}