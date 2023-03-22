import api from "../utils/api"

export const getUser=async(params)=>{


    try {
        let {data}= await api.get('/users',{params})
        return data.detail;

    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const viewUser=async(id,params)=>{

    try {
        let {data}= await api.get(`/view-user/${id}`,{params})
        return data.detail
        
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}


export const updateStatus=async(id)=>{

    try {
        let {data}= await api.post(`/change-status/${id}`)
        console.log(data);
        return data
        
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}


