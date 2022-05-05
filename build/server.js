"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./api/user/user.route");
const db_1 = require("./config/db");
class Server {
    constructor() {
        this.userRoute = new user_route_1.UserRoute();
        this.app = (0, express_1.default)();
        this.configuration();
        this.routes();
    }
    configuration() {
        this.app.set("port", process.env.PORT || 3000);
    }
    routes() {
        this.app.use("/user", this.userRoute.routes);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server is running on port " + this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
db_1.AppDataSource.initialize().then().catch(err => console.log(err));
