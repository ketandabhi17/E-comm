import { Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import RequestUser from "../Middlewares/RequestInterface";

class UserValidator {
  
  public validateUser = [
    check("firstName", "FirstName should have atleast 3 characters").isLength({ min: 3 }),
    check("lastName", "LastName should have atleast 3 characters").isLength({ min: 3 }),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password must have atleast 8 charaters").isLength({
      min: 8,
    }),

    (req: RequestUser, res: Response, next: NextFunction) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array().map((error) => {
            return {
              value: error.value,
              msg: error.msg,
            };
          }),
        });
      } else {
        next();
      }
    },
  ];
}

export default UserValidator;
