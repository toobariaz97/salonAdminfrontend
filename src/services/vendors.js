import api from "../utils/api"

export const getVendors=async(params)=>{


    try {
        let {data}= await api.get('/vendors',{params})
        return data.detail;

    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

export const UpdateStatus=async(id)=>{

    try {
        let {data}=await api.post(`/vendor-status/${id}`)
        return data;
    } catch (error) {
        throw  new Error(error.response.data.message)
    }
}

export const vendorDetails=async(id)=>{

    try {
        let {data}=await api.get(`/view-vendor/${id}`)
        return data.detail;
    } catch (error) {
        throw  new Error(error.response.data.message)
    }
}