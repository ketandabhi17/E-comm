import { authContants } from "../actions/constants"

const initState = {
    name:'ketan'
}

export default (state = initState,action:any)=>{
    switch (action.type){
        case authContants.LOGIN_REQUEST:
            state ={
                ...state,
                ...action.payload
            }
            break;
    }
    return state;
}