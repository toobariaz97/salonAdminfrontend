import api from "../utils/api"

export const getAllServices=async(params)=>{

    try {
        let {data}=await api.get('/services',{params});
        return data.detail
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const addService=async(serviceName)=>{

    try {
        let {data}=await api.post('add-service',serviceName);
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

    
export const changeServiceStatus = async(id)=>{
    try {
        let {data}= await api.post(`/service-status/${id}`);
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
