import axiosInstance from "../helpers/axios";
import { authConstants } from "./constants";

export const login = (user: any) => {
  return async (dispatch: any) => {
    const res = await axiosInstance.post("/admin/login", {});
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};
