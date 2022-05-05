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
exports.Users = exports.userState = void 0;
const typeorm_1 = require("typeorm");
const photo_model_1 = require("../photo/photo.model");
// import { UserAlbum } from "../userAlbum/userAlbum.model";
var userState;
(function (userState) {
    userState["ACTIVE"] = "active";
    userState["INACTIVE"] = "inactive";
})(userState = exports.userState || (exports.userState = {}));
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Users.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp with time zone" }),
    __metadata("design:type", typeorm_1.Timestamp)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp with time zone" }),
    __metadata("design:type", typeorm_1.Timestamp)
], Users.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: userState, default: userState.INACTIVE }),
    __metadata("design:type", String)
], Users.prototype, "userStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => photo_model_1.Photo, (photo) => photo.user),
    __metadata("design:type", Array)
], Users.prototype, "photos", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
exports.Users = Users;
