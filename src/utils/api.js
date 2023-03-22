import axios from "axios";
// import store from "../store";
// import { LOGOUT } from "../Actions/Types";

let baseURL = "";
if (window.location.hostname === "localhost") {
    baseURL = "http://localhost:3003/admin";
} else {
    baseURL = "https://dev74.onlinetestingserver.com:8062/admin";
}

const api = axios.create({
    // baseURL: 'https://dev74.onlinetestingserver.com:5085/api',

    baseURL: baseURL,

    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },

    // onUploadProgress: function (data) {
    //   store.getState().videos.progress = Math.round((100 * data.loaded) / data.total)
    // },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

// api.interceptors.response.use(
//     (res) => res,
//     (err) => {
//         if (err.response.status === 401) {
//             store.dispatch({ type: LOGOUT });
//         }
//         return Promise.reject(err);
//     }
// );

// api.interceptors.request.use((config) => {
//   document.querySelector('.spinner-container').style.display = 'block';
//   return config;
// }, (error) => {
//   document.querySelector('.spinner-container').style.display = 'none';
//   return Promise.reject(error);
// });

// // Add a response interceptor
// api.interceptors.response.use((response) => {
//   document.querySelector('.spinner-container').style.display = 'none';
//   return response;
// }, (error) => {
//   document.querySelector('.spinner-container').style.display = 'none';
//   return Promise.reject(error);
// });

export default api;