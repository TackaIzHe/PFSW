import { Category } from "../entity/Category";
import { Chat } from "../entity/Chat"
import { Comment } from "../entity/Comment";
import { Employer } from "../entity/Employer";
import { Message } from "../entity/Message";
import { Resume } from "../entity/Resume";
import { Skill } from "../entity/Skill";
import { Specialization } from "../entity/Specialization";
import { User } from "../entity/User";
import { Vacancy } from "../entity/Vacancy";

import { DataSource } from "typeorm";

export const DbContext = new DataSource({
    type:'sqlite',
    database:'db.sqlite',
    synchronize:true,
    logging:true,
    entities:[
        Category,
        Chat,
        Comment,
        Employer,
        Message,
        Resume,
        Skill,
        Specialization,
        User,
        Vacancy
    ]
})