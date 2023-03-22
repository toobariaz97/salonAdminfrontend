import api from "./api";

const TOKEN_NAME="tucker_app";

// export const getAuthHeader=()=>{
//     return {
//         Authorization:`Barear ${localStorage.getItem(TOKEN_NAME)}`
//     }
// }

export const setAuthToken=(token)=>{
    if (token) {
        console.log(token)
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem(TOKEN_NAME, token)
    }
    else {
        delete api.defaults.headers.common['authorization'];
        localStorage.removeItem(TOKEN_NAME)

    }
}
export const getAccessToken = ()=> localStorage.getItem(TOKEN_NAME)

export const removeAccessToken=()=>localStorage.removeItem(TOKEN_NAME)