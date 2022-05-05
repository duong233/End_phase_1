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
exports.UserController = void 0;
const http_status_codes_1 = require("http-status-codes");
const user_service_1 = require("./user.service");
class UserController {
    constructor() {
        // POST /register
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req["body"];
            const newUser = yield this.userService.createUser(user);
            res.status(http_status_codes_1.StatusCodes.OK).json({
                msg: "Register success",
            });
        });
        // GET /
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.findAllUser();
            res.send(users);
        });
        // GET /:id
        this.indexId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.findUserById(req.params.id);
        });
        this.userService = new user_service_1.UserService();
    }
}
exports.UserController = UserController;
