import { Router } from "express";

export class PhotoRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes() {
    this.router.post("/upload");
    this.router.put("/:id");
    this.router.delete("/:id");
  }
}
