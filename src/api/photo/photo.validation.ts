import { IsEnum, IsNotEmpty, IsString, Length } from "class-validator";
import { Photo, photoState } from "./photo.model";

export class PhotoValidate {
  @IsString()
  @Length(3, 20)
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsString()
  @IsNotEmpty()
  albumId!: string;

  @IsString()
  @IsNotEmpty()
  link!: string;

  @IsEnum(Photo)
  status!: photoState;
}
