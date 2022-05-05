import { validate } from "class-validator";
import { UserValidate } from "../user/user.validation";
import { NextFunction, Request, Response} from "express"
import { Users } from "../user/user.model";

export class Authentic{
    constructor(){}

    public validateUser=(userValidate: UserValidate, req: Request, res: Response, next: NextFunction)=>{
        validate(userValidate).then()
    }
}
