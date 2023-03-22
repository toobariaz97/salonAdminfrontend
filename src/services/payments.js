import api from "../utils/api";

export const getPayments=async(params)=>{
try {
    let {data}= await api.get('payments',{params});
    return data?.detail 
} catch (error) {
    console.log(error);
}

}