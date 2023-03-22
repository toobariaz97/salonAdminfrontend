import api from "../utils/api";
// import history from "../utils/history";
import { removeAccessToken, setAuthToken } from "../utils/setAuthToken";

export const login = async(fromData)=>{
try {
    let {data}= await api.post('/login',fromData);
    setAuthToken(data.token);
    return data;
    
} catch (error) {
    console.log(error);
    throw new Error(error.response.data.message)
}

}

export const loadUser = async()=>{

    try {
        let {data}= await api.get('/account');
        return data?.detail;
        
    } catch (error) {
      removeAccessToken()
    console.log(error);
    throw new Error(error.response.data.message)
        
    }
}


export const editProfile=async(form)=>{

try {
    let {data}= await api.post('edit-profile',form);
    console.log(form,38);
    return data;

    
} catch (error) {
    throw new Error(error.response.data.message)
}

}
export const changePassword=async(form)=>{

    try {
        let {data}= await api.post('change-password',form);
        console.log(form,38);
        return data;
    
        
    } catch (error) {
        throw new Error(error.response.data.message)
    }
    
    }