import {  UPDATE_SUCCESS_POPUP,UPDATE_CONFIRM_POPUP} from "../actions/types";

const intitialState={

  success_popup_params:{
    title: null,
    message: null,
    delay: 0,
    isError : false,
    successPopup: false,
  },
  confirm_popup_params: {
    title: null,
    message: null,
    visibility : false,
    isConfirmed : false,
    isCanceled : false,
},

}
export default function alert(state = intitialState, action) {
  const { type, payload } = action;
  switch (type) {
  

    case UPDATE_SUCCESS_POPUP:
      return {
        ...state,
        successPopup: payload.successPopup,
        success_popup_params: payload.success_popup_params
      };

    case UPDATE_CONFIRM_POPUP:

      return {
        ...state,
        confirm_popup_params: payload,
      };
    default:
      return state;
  }
}
