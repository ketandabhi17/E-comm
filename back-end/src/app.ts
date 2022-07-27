import express from "express";
import "dotenv/config";
// import {v2 as cloudinary} from "cloudinary";
import path from "path";
import cors from 'cors'
import userRouter from "./routes/userRoutes";
import adminRouter from "./routes/adminRoutes";
import categoryRouter from "./routes/categoryRoutes";
import productRouter from "./routes/productRoutes";
import cartRouter from "./routes/cartRoutes";
import DBconnection from "./dbconnection/connect";
new DBconnection();

const userRoutes = new userRouter().router;
const adminRoutes = new adminRouter().router;
const productRoutes = new productRouter().router;
const categoryRoutes = new categoryRouter().router;
const cartRoutes = new cartRouter().router;

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// })
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.app.listen(process.env.PORT, () => {
      console.log(`server is listening on port ${process.env.PORT}`);
    });
  }

  private middlewares(): void {
    this.app.use(cors())
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use("/public",express.static(path.join(__dirname, "uploads")));
  }

  private routes(): void {
    this.app.use("/api/user", userRoutes);
    this.app.use("/api/admin",  adminRoutes);
    this.app.use("/api/category", categoryRoutes);
    this.app.use("/api/product", productRoutes);
    this.app.use("/api/cart", cartRoutes);
  }
}

export default App;
