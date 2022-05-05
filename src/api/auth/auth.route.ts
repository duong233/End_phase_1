import { Router } from "express"

//login, changePassword
export class authRoute{
    public router: Router;
    constructor(){
        this.router=Router();
    }

    public routes(){
        this.router.use("/login")
        this.router.use("/changePassword")
    }
}