import { Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import RequestUser from "./RequestInterface";
import User from "../model/userModel";

const isLoggedin = async (
  req: RequestUser,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authtoken) {
    return res.status(401).json({ status: false, msg: "You are not LoggedIn" });
  }

  const authToken = req.headers.authtoken;
  // console.log(authToken);

  try {
    const loggedUser: JwtPayload = (await jwt.verify(
      authToken as string,
      process.env.JWT_USER_LOGIN_SECRET_KEY as string
    )) as JwtPayload;
    if (!loggedUser.id) {
      return res.status(401).json({ status: false, data: "Not a valid user" });
    }
    req.user = loggedUser;

    const loggedinUser = await User.findById(req.user.id);

    if (!loggedinUser) {
      return res
        .status(404)
        .json({ status: false, data: "User doesn't exists" });
    }
    next();
  } catch (error: any) {
    return res.status(400).json({ status: false, data: "Invalid token" });
  }
};

export default isLoggedin;
