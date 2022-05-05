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
exports.Photo = exports.photoState = void 0;
const typeorm_1 = require("typeorm");
const album_model_1 = require("../album/album.model");
const user_model_1 = require("../user/user.model");
var photoState;
(function (photoState) {
    photoState["DELETED"] = "deleted";
    photoState["UPDATED"] = "updated";
    photoState["UPLOAD"] = "upload";
})(photoState = exports.photoState || (exports.photoState = {}));
let Photo = class Photo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Photo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Photo.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Photo.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Photo.prototype, "albumId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Photo.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp with time zone" }),
    __metadata("design:type", typeorm_1.Timestamp)
], Photo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp with time zone" }),
    __metadata("design:type", typeorm_1.Timestamp)
], Photo.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: photoState }),
    __metadata("design:type", String)
], Photo.prototype, "photoStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.Users, (user) => user.photos),
    __metadata("design:type", user_model_1.Users)
], Photo.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => album_model_1.Album, (album) => album.photos),
    __metadata("design:type", album_model_1.Album)
], Photo.prototype, "album", void 0);
Photo = __decorate([
    (0, typeorm_1.Entity)()
], Photo);
exports.Photo = Photo;
