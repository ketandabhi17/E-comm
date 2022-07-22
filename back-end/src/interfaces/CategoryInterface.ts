import { Types } from "mongoose";

interface CategoryInterface {
  name: string;
  slug: string;
  categoryImage: string;
  parentId: string;
}

export default CategoryInterface;
