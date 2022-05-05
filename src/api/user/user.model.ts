import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  OneToMany,
} from "typeorm";
import { Photo } from "../photo/photo.model";
// import { UserAlbum } from "../userAlbum/userAlbum.model";

export enum userState {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  userId!: string;

  @Column()
  name!: string;

  @Column()
  userName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ type: "timestamp with time zone" })
  createdAt?: Timestamp;

  @Column({ type: "timestamp with time zone" })
  updatedAt?: Timestamp;

  @Column({ type: "enum", enum: userState, default: userState.INACTIVE })
  userStatus!: userState;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos!: Photo[];

}
