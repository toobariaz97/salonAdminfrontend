import {SET_AUTH} from "../actions/types";

const initialState = {
    token: localStorage.getItem('tucker_app'),
    // isAuthenticated: null,
    // loading: null,
    user: null
}



export default function auth(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case SET_AUTH:
            // console.log("user Payload",payload)
            return {
                ...state,
               user:payload
            }


        default:
            return state
    }


}