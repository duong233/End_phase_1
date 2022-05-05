import { DataSource } from "typeorm";
import { Album } from "../api/album/album.model";
import { Photo } from "../api/photo/photo.model";
import { Users } from "../api/user/user.model";
// import { UserAlbum } from "../api/userAlbum/userAlbum.model";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username:"postgres",
  password:"duong233",
  database:"albumTest",
  port:5555,
  synchronize: true,
  logging: true,
  entities: [Users, Photo, Album]
});
