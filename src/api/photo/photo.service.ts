import { AppDataSource } from "../../config/db";
import { Photo, photoState } from "./photo.model";

export class PhotoService {
  constructor() {}

  public createPhoto = async (
    name: string,
    userId: string,
    albumId: string,
    link: string,
    status: photoState
  ) => {
    const photo = new Photo();
    photo.name = name;
    photo.userId = userId;
    photo.albumId = albumId;
    photo.link = link;
    photo.photoStatus = status;

    await AppDataSource.manager.save(photo);
  };

  public updatePhoto = async (photo: Photo, id: string) => {
    await AppDataSource.getRepository(Photo).update(id, photo);
    const result = await AppDataSource.getRepository(Photo).save(photo);
    return result;
  };

  public deletePhoto = async (id: string) => {
    const result = await AppDataSource.getRepository(Photo).delete(id);
  };
}
