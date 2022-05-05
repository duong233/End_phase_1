import { IsEnum, IsNotEmpty, IsString, Length } from "class-validator";
import { Album, albumState } from "./album.model";

export class AlbumValidate {
    @IsString()
    @Length(3,20)
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    description!: string

    @IsEnum(Album)
    status!: albumState
}