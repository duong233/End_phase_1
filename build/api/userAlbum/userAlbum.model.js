"use strict";
// import {
//   Column,
//   Entity,
//   JoinColumn,
//   JoinTable,
//   ManyToMany,
//   ManyToOne,
//   OneToOne,
//   PrimaryGeneratedColumn,
// } from "typeorm";
// import { Album } from "../album/album.model";
// import { Users } from "../user/user.model";
// export enum uaState {OWNER="ower", CONTRIBUTOR="contributor", VIEWER= "viewer"};
// @Entity()
// export class UserAlbum {
//   @PrimaryGeneratedColumn("uuid")
//   uaId!: string;
//   @Column()
//   userId!: string;
//   @Column()
//   albumId!: string;
//   @Column({type: "enum", enum: uaState})
//   uaStatus!: uaState;
//   @ManyToMany(() => Users)
//   @JoinTable()
//   users!: Users[];
//   @ManyToMany(() => Album)
//   @JoinTable()
//   albums!: Album[];
// }
