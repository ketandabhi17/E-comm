// export default (state={name:'ketan'}, action:any)=>{

//     return state
// }

import authReducer from "./auth.reducers";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    auth:authReducer
})

export default rootReducer