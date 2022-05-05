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
exports.PhotoService = void 0;
const db_1 = require("../../config/db");
const photo_model_1 = require("./photo.model");
class PhotoService {
    constructor() {
        this.createPhoto = (name, userId, albumId, link, status) => __awaiter(this, void 0, void 0, function* () {
            const photo = new photo_model_1.Photo();
            photo.name = name;
            photo.userId = userId;
            photo.albumId = albumId;
            photo.link = link;
            photo.photoStatus = status;
            yield db_1.AppDataSource.manager.save(photo);
        });
        this.updatePhoto = (photo, id) => __awaiter(this, void 0, void 0, function* () {
            yield db_1.AppDataSource.getRepository(photo_model_1.Photo).update(id, photo);
            const result = yield db_1.AppDataSource.getRepository(photo_model_1.Photo).save(photo);
            return result;
        });
        this.deletePhoto = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.AppDataSource.getRepository(photo_model_1.Photo).delete(id);
        });
    }
}
exports.PhotoService = PhotoService;
