import { authConstants } from "../actions/constants";

const initState = {
  name: "ketan ",
};

export default (state = {}, action: any) => {
  
  console.log(action);
  
  
    switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload
      };
      break;
  }
  return state;
};
