import { fetchCredentials } from "../../helpers/data-fetch"
import { authDoneChecking, authLogin, authStartChecking } from "./authSlice";



export const startLogin = ( email, password )=>{

    return async( dispatch )=>{

        try {
            
            dispatch(authStartChecking());
            const resp = await fetchCredentials(email, password);
            localStorage.setItem('user_info', JSON.stringify(resp.user))
            dispatch(authLogin(resp.user));
            
        } catch (error) {
            dispatch(authDoneChecking())
        }


    }

}