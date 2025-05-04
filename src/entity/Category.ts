import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Specialization } from "./Specialization"

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string
    
    @OneToMany(()=>Specialization,(specialization)=>specialization.category)
    specialization!:Specialization[]
}