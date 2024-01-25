import { LOGIN, REGISTER } from "../Actiontype/Actiontype"


const initialState={user:{}}

export const userReducer=(state =initialState,{type,payload})=>{
    switch (type) {
        case REGISTER:
            
            localStorage.setItem("token",payload.token)
            return {...state,user:payload.newuser}
       case LOGIN :
        localStorage.setItem("token",payload.token)
            return {...state,user:payload.user}
            default:
                return state

}
}