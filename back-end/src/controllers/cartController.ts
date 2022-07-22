import { Request, Response, NextFunction } from "express";
import CartInterface from "../interfaces/CartInterface";
import Cart from "../model/cartModel";
import RequestUser from "../Middlewares/RequestInterface";
// import Cart from "../model/cartModel";

class cartController {
  public addItemToCart = async (req: RequestUser, res: Response) => {
    const cartfound = await Cart.findOne({ user: req.user.id });

    if (cartfound) {
      //if cart is already exists then update the cart

      const product = req.body.cartItems.product;
      const item = cartfound.cartItems.find((c: any) => c.product == product);

      let condition, update;
      if (item) {
        condition = { user: req.user.id, "cartItems.product": product };
        update = {
          $set: {
            "cartItems.$": {
              ...req.body.cartItems,
              quantity: item.quantity + req.body.cartItems.quantity,
            },
          },
        };
      } else {
        condition = { user: req.user.id };
        update = {
          $push: {
            cartItems: req.body.cartItems,
          },
        };
      }
      const updatecart = await Cart.findOneAndUpdate(condition, update);
      res.status(200).json({ updatecart });
    } else {
      //else create a new cart

      const cart = new Cart({
        user: req.user.id,
        cartItems: [req.body.cartItems],
      });

      const Item = await cart.save();
      res.status(200).json({ Item });
    }
  };
}

export default cartController;
