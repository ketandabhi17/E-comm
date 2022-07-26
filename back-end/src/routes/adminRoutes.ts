import express from "express";
import AdminController from "../controllers/adminController";
import UserValidator from "../validations/userValidator";
import isLoggedin from "../Middlewares/isLoggedin"

const userValidator = new UserValidator();
const adminController = new AdminController();
class adminRoutes {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes() {
    this.router
      .route("/register")
      .post(userValidator.validateUser, adminController.Register);

    this.router.route("/login").post(adminController.Login);

    this.router.route("/signout").post(isLoggedin,adminController.signout)
  }
}

export default adminRoutes;
