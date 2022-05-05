"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
class UserRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/");
        this.router.post("/register");
        this.router.post("/login");
        this.router.get("/:id");
        this.router.put("/:id");
        this.router.delete("/:id");
    }
}
exports.UserRoute = UserRoute;
