import express, { Request, Response } from "express";
import { AlbumRoute } from "./api/album/album.route";
import { PhotoRoute } from "./api/photo/photo.route";
import { UserRoute } from "./api/user/user.route";
import { AppDataSource } from "./config/db";

class Server {
  private app: express.Application;
  public userRoute =new UserRoute();
  public photoRoute= new PhotoRoute();
  public albumRoute= new AlbumRoute();

  constructor() {
    this.app = express();
    this.configuration();
    this.routes();
  }

  public configuration() {
    this.app.set("port", process.env.PORT || 3000);
  }

  public routes() {
    this.app.use("/user", this.userRoute.routes);
    this.app.use("/photo", this.photoRoute.routes);
    this.app.use("/album", this.albumRoute.routes);
  }

  public start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server is running on port " + this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
AppDataSource.initialize().then(()=>{
  console.log('connect to db')
}).catch(err => console.log(err))
