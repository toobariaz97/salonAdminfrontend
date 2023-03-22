import api from "../utils/api"

export const verifyEmail =async(email)=>{

try {
    
    let {data}= await api.post('/verify-email',email)
    return data;
} catch (error) {
    
    console.log(error);
    throw new Error(error.response.data.message);
}

}

export const verifyCode=async(code,email)=>{

    try {
        
        let {data}=await api.post('/verify-code',{code,email});
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.message);

    }
}

export const passwordReset=async(formData)=>{
    try {
        
        let {data}=await api.post('/reset-password',formData);
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.message);

    }
}