import express from "express";
import CategoryController from "../controllers/categoryController";
import adminMiddleware from "../Middlewares/adminMiddleware";
import isLoggedin from "../Middlewares/isLoggedin";
import multer from "multer";
import shortid from "shortid";
import * as path from "path";
// import verifyToken from "../Middlewares/isLoggedin";

const categoryController = new CategoryController();

class categoryRoutes {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }
  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });
  upload = multer({ storage: this.storage })
  public routes() {
    this.router
      .route("/create")
      .post(isLoggedin, adminMiddleware,this.upload.single("categoryPicture"), categoryController.Register);

    this.router.route("/get").get(isLoggedin, categoryController.GetCategory);
  }
}

export default categoryRoutes;
