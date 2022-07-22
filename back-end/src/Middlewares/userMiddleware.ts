import { Response, NextFunction, Request } from "express";
import UserInterface from "../interfaces/UserInterface";
import RequestUser from "./RequestInterface";

const userMiddleware =async (
  req: RequestUser,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "Access denied" });
  }
  next();
};

export default userMiddleware;
