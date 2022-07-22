import express from "express";
import CartController from "../controllers/cartController";
import userMiddleware from "../Middlewares/userMiddleware";
import isLoggedin from "../Middlewares/isLoggedin";
// import verifyToken from "../Middlewares/isLoggedin";

const cartController = new CartController();

class cartRoutes {
  public router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }

  public routes() {
    this.router
      .route("/additem")
      .post(isLoggedin,userMiddleware,cartController.addItemToCart);
  }
}

export default cartRoutes;
