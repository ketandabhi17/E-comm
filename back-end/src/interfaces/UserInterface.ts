import { Types } from "mongoose";

interface UserInterface {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  contactNumer: string;
  profilePicture: string;
}

export default UserInterface;
