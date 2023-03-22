import {  useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../utils/setAuthToken";

export default function AuthGuard({children}) {
    const navigate = useNavigate();
    
    // disallow user to access this page if user is loggedin 
      useEffect(() => {
          if(getAccessToken()){
              navigate("/", { replace: true });
        }
      }, []);
  return (
    <>
    {children}  
    </>
  )
}
