import api from "../utils/api"

export const addEvent= async(eventName)=>{
try {
    let {data}= await api.post('/create-event',eventName);
    return data;
} catch (error) {
    throw new Error(error.response.data.message)
}
}



export const getEvents= async(params)=>{
    try {
        let {data}= await api.get('events',{params});
      
        return data.detail;
    } catch (error) {
        throw new Error(error.response.data.message)
    }
    }
    
export const changeEventStatus = async(id)=>{
    try {
        let {data}= await api.post(`/event-status/${id}`);
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}