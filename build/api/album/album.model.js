"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = exports.albumState = void 0;
const typeorm_1 = require("typeorm");
const photo_model_1 = require("../photo/photo.model");
const user_model_1 = require("../user/user.model");
// import { UserAlbum } from "../userAlbum/userAlbum.model";
var albumState;
(function (albumState) {
    albumState["PRIVATE"] = "private";
    albumState["PUBLIC"] = "public";
})(albumState = exports.albumState || (exports.albumState = {}));
let Album = class Album {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Album.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Album.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Album.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp with time zone" }),
    __metadata("design:type", typeorm_1.Timestamp)
], Album.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp with time zone" }),
    __metadata("design:type", typeorm_1.Timestamp)
], Album.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: albumState }),
    __metadata("design:type", String)
], Album.prototype, "albumStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => photo_model_1.Photo, (photo) => photo.album),
    __metadata("design:type", Array)
], Album.prototype, "photos", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_model_1.Users),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Album.prototype, "users", void 0);
Album = __decorate([
    (0, typeorm_1.Entity)()
], Album);
exports.Album = Album;
