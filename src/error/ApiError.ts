export default class ApiError extends Error{
    err:number
    mess:string
    constructor(err:number,mess:string){
        super()
        this.err=err
        this.mess=mess
    }

    static badData(){
        return new ApiError(404,'Некоректные данные')
    }

    static serverError(){
        return new ApiError(500,'Ошибка сервера')
    }
}