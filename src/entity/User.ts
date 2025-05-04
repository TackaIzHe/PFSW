import { Column, PrimaryGeneratedColumn, OneToMany, Entity } from "typeorm";
import { Resume } from "./Resume";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string

    @Column()
    city!:string

    @Column()
    status!:string

    @Column()
    regionSearch!:string

    @Column()
    language!:string

    @Column()
    email!:string

    @Column()
    password!:string

    @OneToMany(()=>Resume, (resume)=> resume.user)
    resume!:Resume[];
}