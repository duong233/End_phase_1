import * as bcrypt from "bcrypt";
import { Response, Request, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Users } from "./user.model";
import { UserService } from "./user.service";
import { transporter } from "../../config/email";

export class UserController {
  public userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  // POST /register
  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req["body"];
      // const newUser = await this.userService.createUser(user);

      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashPassword;

      //send email
      const option = {
        from: process.env.USER_MAIL,
        to: user.email,
        subject: "send activ email",
        html: "<strong>Hello world?</strong>",
      };

      const info = await transporter.sendMail(option);
      console.log("Message sent :%s", info.response);

      res.status(StatusCodes.OK).json({
        msg: "Register success",
      });

      await this.userService.createUser(user);
    } catch (err) {
      next(err);
    }
  };

  // GET /
  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.findAllUser();
      res.status(StatusCodes.OK).send(users);
    } catch (err) {
      next(err);
    }
  };
  // GET /:id
  public indexId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.findUserById(req.params.id);
      res.status(StatusCodes.OK).send(user)
    } catch (error) {
      next(error);
    }
  };
  // PUT /:id
  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await this.userService.updateById(req.body, req.params.id);
      res.status(StatusCodes.OK).json({
        msg: "Update success",
      });
    } catch (error) {
      next(error);
    }
  };
  // DELETE /:id
  public deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await this.userService.deleteById(req.params.id);
      res.status(StatusCodes.OK).json({ 
        msg: "Delete success" 
      });
    } catch (error) {
      next(error);
    }
  };
}
