import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { Album } from "../album/album.model";
import { Users } from "../user/user.model";

export enum photoState {
  DELETED = "deleted",
  UPDATED = "updated",
  UPLOAD = "upload",
}

@Entity()
export class Photo {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  userId!: string;

  @Column()
  albumId!: string;

  @Column()
  link!: string;

  @Column({ type: "timestamp with time zone" })
  createdAt?: Timestamp;

  @Column({ type: "timestamp with time zone" })
  updatedAt?: Timestamp;

  @Column({ type: "enum", enum: photoState })
  photoStatus!: photoState;

  @ManyToOne(() => Users, (user) => user.photos)
  user!: Users;

  @ManyToOne(() => Album, (album) => album.photos)
  album!: Album;
}
