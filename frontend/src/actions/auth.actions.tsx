import { authContants } from "./constants";

export const login = (user:any) => {
  return (dispatch:any) => {
    dispatch({
      type: authContants.LOGIN_REQUEST,
      payload: {
        ...user
      },
    });
  };
};
