import express from "express";
import ProductController from "../controllers/productController";
import adminMiddleware from "../Middlewares/adminMiddleware";
import isLoggedin from "../Middlewares/isLoggedin";
import multer from "multer";
import shortid from "shortid";
import * as path from "path";

const productController = new ProductController();

class productRoutes {
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
  upload = multer({ storage: this.storage });
  public routes() {
    this.router
      .route("/create")
      .post(
        isLoggedin,
        adminMiddleware,
        this.upload.array("productPicture"),
        productController.Register
      );
  }
}

export default productRoutes;
