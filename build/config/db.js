"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const album_model_1 = require("../api/album/album.model");
const photo_model_1 = require("../api/photo/photo.model");
const user_model_1 = require("../api/user/user.model");
// import { UserAlbum } from "../api/userAlbum/userAlbum.model";
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "duong233",
    database: "albumTest",
    port: 5555,
    synchronize: true,
    logging: true,
    entities: [user_model_1.Users, photo_model_1.Photo, album_model_1.Album]
});
