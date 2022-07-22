import mongoose, { ConnectOptions } from "mongoose";

class DBconnection {
  constructor() {
    mongoose
      .connect(process.env.DATABASE_URL as string)
      .then(() => {
        console.log("connected to db");
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export default DBconnection;
