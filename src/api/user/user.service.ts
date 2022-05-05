import { Users, userState } from "./user.model";
import { AppDataSource } from "../../config/db";
import { UserValidate } from "./user.validation";

export class UserService {
  constructor() {}

  // public createUser = async (
  //   name: string,
  //   userName: string,
  //   email: string,
  //   password: string,
  //   status: UserState
  // ) => {
  //   const user = new Users();
  //   user.name = name;
  //   user.userName = userName;
  //   user.password = password;
  //   user.email = email;
  //   user.status = status;
  //   await AppDataSource.manager.save(user);
  // };

  public createUser = async (user: Users) => {
    const newUser = await AppDataSource.getRepository(Users).save(user);
  };

  public updateById = async (user: Users, id: string) => {
    await AppDataSource.getRepository(Users).update(id, user);
    const result = await AppDataSource.getRepository(Users).save(user);
  };

  public deleteById = async (id: string) => {
    const result = await AppDataSource.getRepository(Users).delete(id);
  };

  public findAllUser = async () => {
    const users = await AppDataSource.getRepository(Users).find();
  };

  public findUserById = async (id: string) => {
    const user = await AppDataSource.getRepository(Users).findOneBy({
      userId: id,
    });
  };
}
