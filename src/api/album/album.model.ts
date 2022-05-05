import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { Photo } from "../photo/photo.model";
import { Users } from "../user/user.model";
// import { UserAlbum } from "../userAlbum/userAlbum.model";

export enum albumState {
  PRIVATE = "private",
  PUBLIC = "public",
}

@Entity()
export class Album {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column({ type: "timestamp with time zone" })
  createdAt?: Timestamp;

  @Column({ type: "timestamp with time zone" })
  updatedAt?: Timestamp;

  @Column({ type: "enum", enum: albumState })
  albumStatus!: albumState;

  @OneToMany(() => Photo, (photo) => photo.album)
  photos!: Photo[];

  @ManyToMany(() => Users)
  @JoinTable()
  users!: Users[];
}
