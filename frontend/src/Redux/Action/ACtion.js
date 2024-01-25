import { LOGIN, REGISTER } from "../Actiontype/Actiontype"
import axios from 'axios'
export const register=(data,Navigate)=>async(dispatch)=>{
    try {
        await axios.post("http://localhost:6000/user/register",data).then(res=>dispatch({type:REGISTER,payload:res.data}))
        Navigate("/profile")
    } catch (error) {
        console.log(error)
        
    }
}
export const login =(data)=>async(dispatch)=>{
    try{
    await axios.post("http://localhost:6000/user/login",data).then(res=>dispatch({type:LOGIN,payload:res.data}))
} catch (error) {
    console.log(error)
    
}
}