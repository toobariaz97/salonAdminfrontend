 
  
  
  import{SET_AUTH} from './types'

  export const setAuth = (user) => {
    return {
      type: SET_AUTH,
      payload: user,
    };
  };
  