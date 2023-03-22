import api from "../utils/api"

export const totalData=async()=>{

    try {
        let {data}= await api.get('/dashboard')
        return data?.detail;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}