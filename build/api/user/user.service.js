"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("./user.model");
const db_1 = require("../../config/db");
class UserService {
    constructor() {
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
        this.createUser = (user) => __awaiter(this, void 0, void 0, function* () {
            const newUser = yield db_1.AppDataSource.getRepository(user_model_1.Users).save(user);
        });
        this.updateUser = (user, id) => __awaiter(this, void 0, void 0, function* () {
            yield db_1.AppDataSource.getRepository(user_model_1.Users).update(id, user);
            const result = yield db_1.AppDataSource.getRepository(user_model_1.Users).save(user);
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.AppDataSource.getRepository(user_model_1.Users).delete(id);
        });
        this.findAllUser = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield db_1.AppDataSource.getRepository(user_model_1.Users).find();
        });
        this.findUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.AppDataSource.getRepository(user_model_1.Users).findOneBy({
                userId: id
            });
        });
    }
}
exports.UserService = UserService;
