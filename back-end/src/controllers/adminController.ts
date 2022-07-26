import { Response, NextFunction } from "express";
import bcrypt, { genSalt, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import RequestUser from "../Middlewares/RequestInterface";
import User from "../model/userModel";
import UserInterface from "../interfaces/UserInterface";

class adminController {
  public Register = async (req: RequestUser, res: Response) => {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirm_password,
      contactNumer,
    } = req.body;

    if (!confirm_password) {
      return res
        .status(400)
        .json({ status: false, data: "Confirm Password is not provided" });
    }

    if (password !== confirm_password) {
      return res
        .status(400)
        .json({ status: false, data: "Password Doesn't Match" });
    }

    const user = await User.find({ email: email });

    if (user.length !== 0) {
      return res
        .status(400)
        .json({ status: false, data: "User Already Exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const dbUser = new User({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: hashpassword,
      role: "admin",
      contactNumer: contactNumer,
    });

    try {
      const token = await jwt.sign(
        { email: email },
        process.env.JWT_USER_REGISTER_SECRET_KEY as string,
        { expiresIn: "10m" }
      );

      console.log(token);

      const final = await dbUser.save();

      res.status(200).json({
        status: true,
        msg: "You have successfully registered",
        data: final,
      });
    } catch (error: any) {
      return res.status(501).json({
        succss: false,
        data: "Internal Server Error,Try After Some Time",
      });
    }
  };

  public Login = async (req: RequestUser, res: Response) => {
    const { email, userPassword } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ status: false, data: "Email is not provided" });
    }

    if (!userPassword) {
      return res
        .status(400)
        .json({ status: false, data: "password is not provided" });
    }

    const user = await User.findOne({ email: email });
    // return res.json({ user: user });
    if (!user) {
      return res
        .status(400)
        .json({ status: false, data: "Invalid credentials" });
    }

    // const comparepass = await bcrypt.compare(userPassword,user.password)

    if (await bcrypt.compare(userPassword, user.password)) {
      const loginData = {
        id: user._id,
        role: user.role,
      };

      const token = await jwt.sign(
        loginData,
        process.env.JWT_USER_LOGIN_SECRET_KEY as string
      );

      await user.save();

      return res
        .status(200)
        .cookie("auth-token", token)
        .set("Auth-token", token)
        .json({ status: true, data: token });
    } else {
      return res
        .status(400)
        .json({ status: false, data: "Invalid Credentials" });
    }
  };

  public signout = async (req: RequestUser, res: Response) => {
    res.clearCookie("auth-token");
    res.status(200).json({
      msg: "You're successfully signed out.......!!!!!!!!",
    });
  };
}

export default adminController;
