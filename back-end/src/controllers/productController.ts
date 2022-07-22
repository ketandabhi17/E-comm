import { Request, Response, NextFunction } from "express";
// import RequestUser from "../Middlewares/RequestInterface";
import Product from "../model/productModel";
// import { v2 as cloudinary } from "cloudinary";
import shortid from "shortid";
// import streamifier from "streamifier";
import slugify from "slugify";
import RequestProduct from "../Middlewares/RequestProduct";

class productController {
  public Register = async (req: RequestProduct, res: Response) => {
    
    // let streamUpload = (req: RequestUser) => {
    //   return new Promise((resolve, reject) => {
    //     let stream = cloudinary.uploader.upload_stream((error, result) => {
    //       if (result) {
    //         resolve(result);
    //       } else {
    //         reject(error);
    //       }
    //     });
    //     const buf: any = req.file?.buffer;
    //     streamifier.createReadStream(buf).pipe(stream);
    //   });
    // };
    // async function upload(req: RequestUser) {
    //   let result = await streamUpload(req);
    //   console.log(result);
    // }
    // upload(req);

    const { name, price, description, category, quantity } = req.body;

    let productPictures = [];
    const a: any = req.files?.length;
    const b: any = req.files;
    if (a > 0) {
      productPictures = b?.map((file: any) => {
        return { img: file.filename };
      });
    }

    const product = new Product({
      name: name,
      slug: slugify(name),
      price,
      quantity,
      description,
      productPictures,
      category,
      createdBy: req.user.id,
    });
    const p = await product.save();
    res.status(201).json({ p });
    // console.log(req.body.file);

    // res.status(200).json({ file: req.files, body: req.body });
  };
}

export default productController;
