import { useCallback } from "react";
import {useDispatch} from "react-redux";
import { updateSuccessPopup } from "../store/actions/alert";
import event from "../utils/event";
const popupsDefaultValue = {
    confirm: {
        title: null,
        message: null,
        visibility : true,
       onConfirmed : false,
        onCanceled : false,
    }    
};


export default function useMessagePopup() {
    const dispatch = useDispatch();
    
    const successPopup = (params) => {
        dispatch(updateSuccessPopup(true,params));
    };

    const errorPopup = (params)=> {
        params.isError = true;
        // params.message=""
        dispatch(updateSuccessPopup(true,params));
      };

      const confirmPopup = useCallback((params = {})=> {
          let data = {...popupsDefaultValue.confirm};
          Object.assign(data,params);
          event.publish('showConfirmPopup',data);
        });
        // const setFile=useCallback((params={})=>{

        //     let data={...popupsDefaultValue.confirm};
        //     Object.assign(data.params);
        //     event.publish('showFileModal',data)
        // })
        
        return {
          successPopup,
          errorPopup,
          confirmPopup,
        //   setFile
      };

}
