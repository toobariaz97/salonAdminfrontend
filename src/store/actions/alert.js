import {UPDATE_SUCCESS_POPUP,UPDATE_CONFIRM_POPUP } from "./types";


export const updateSuccessPopup = (value, params = {})=> {

    return {
          type : UPDATE_SUCCESS_POPUP,
          payload : {
              successPopup : value,
              success_popup_params : params,
          },
      }
  };
  export const updateConfirmPopup = (value, params = {})=> {
    params.visibility = value; 
    return {
        type : UPDATE_CONFIRM_POPUP,
        payload : params,
    }
  };
  