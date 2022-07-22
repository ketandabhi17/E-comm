import { Response, NextFunction, Request } from "express";
import UserInterface from "../interfaces/UserInterface";
import RequestUser from "./RequestInterface";

const adminMiddleware =async (
  req: RequestUser,
  res: Response,
  next: NextFunction
) => {
  // console.log("asdfghj");
  
  if (req.user.role !== "admin") {
    return res.status(400).json({ message: "Access denied" });
  }
  next();
};

export default adminMiddleware;
