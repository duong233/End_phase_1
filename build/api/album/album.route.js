"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumRoute = void 0;
const express_1 = require("express");
class AlbumRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post("/upload");
        this.router.put("/:id");
        this.router.delete("/:id");
    }
}
exports.AlbumRoute = AlbumRoute;
