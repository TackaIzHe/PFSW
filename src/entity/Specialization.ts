import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vacancy } from "./Vacancy";
import { Category } from "./Category";

@Entity()
export class Specialization{
    @PrimaryGeneratedColumn()
    id!:number
    
    @Column()
    name!:string

    @OneToMany(()=>Vacancy,(vacancy)=>vacancy.specialization)
    vacancy!:Vacancy[]

    @ManyToOne(()=>Category,(category)=>category.specialization)
    category!:Category
}