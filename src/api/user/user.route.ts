import { validate } from "class-validator";
import { Router } from "express";
import { UserController } from "./user.controller";
import { UserValidate } from "./user.validation";

export class UserRoute {
  public router: Router;
  public userController: UserController;
  public userValidate : UserValidate;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.userValidate = new UserValidate();
    this.routes();
  }

  public routes() {
    this.router.get("/", this.userController.index);
    this.router.post("/register",this.userController.create);
    this.router.post("/login");
    this.router.get("/:id", this.userController.indexId)
    this.router.put("/:id", this.userController.updateUser);
    this.router.delete("/:id", this.userController.deleteUser);
  }
}
