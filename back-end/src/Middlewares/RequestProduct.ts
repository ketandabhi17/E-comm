import { Request} from "express";

interface RequestProduct extends Request{
    product?:any;
    user?:any;
}
export default RequestProduct;