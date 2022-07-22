import { Request, Response, NextFunction } from "express";
import slugify from "slugify";
import Category from "../model/CategoryModel";
import RequestUser from "../Middlewares/RequestInterface";

class categoryController {
  public Register = async (req: Request, res: Response) => {
    try {
      const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name),
        categoryImage: req.body.file,
        parentId: req.body.parentId,
      };

      if (req.file) {
        categoryObj.categoryImage =
          process.env.API + "/public/" + req.file.filename;
      }

      if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
      }

      const cat = new Category(categoryObj);
      await cat.save();
      res.status(200).json({ data: "success" });
    } catch (error: any) {
      res.status(501).send({
        succss: false,
        data: "Internal Server Error,Try After Some Time",
      });
    }
  };
  createCategories(all: any, parentId = null): any {
    const categoryList = [];
    let category;

    if (parentId == null) {
      category = all.filter((cat: any) => cat.parentId == undefined);
    } else {
      category = all.filter((cat: any) => cat.parentId == parentId);
    }

    for (let cate of category) {
      categoryList.push({
        _id: cate._id,
        name: cate.name,
        slug: cate.slug,
        children: this.createCategories(all, cate._id),
      });
    }

    return categoryList;
  }

  public GetCategory = async (req: RequestUser, res: Response) => {
    const all = await Category.find({});
    if (all) {
      const categoryList = this.createCategories(all);
      return res.status(200).json({ categoryList });
    }
    return res.status(400).json({ msg: "no categories found" });
  };
}

export default categoryController;
