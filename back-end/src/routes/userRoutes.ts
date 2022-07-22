import express from "express";
import UserController from "../controllers/userContoller";
import UserValidator from "../validations/userValidator";

const userValidator = new UserValidator();
const userController = new UserController();
class userRoutes {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes() {
    this.router
      .route("/register")
      .post(userValidator.validateUser, userController.Register);

      this.router
      .route('/login')
      .post(userController.Login)
  }
}

export default userRoutes;
