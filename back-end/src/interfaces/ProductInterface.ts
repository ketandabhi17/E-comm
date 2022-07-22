import { Types } from "mongoose";

interface ProductInterface {
  name: string;
  slug: string;
  price: number;
  quantity:number;
  description: string;
  offer: number;
  productPictures: string;
  reviews: string;
  category: any;
  createdBy: any;
  updatedAt: any;
}

export default ProductInterface;
