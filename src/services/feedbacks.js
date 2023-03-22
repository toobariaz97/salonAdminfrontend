import api from "../utils/api"

export const getFeedbacks=async(params)=>{

    try {
        let {data}= await api.get("feedbacks",{params});
        return data.detail
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const viewFeedback=async(id)=>{

    try {
        let {data}= await api.get(`view-feedback/${id}`);
        return data.detail
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}