import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Navbar} from "../Layout/Navbar";
import {Sidebar} from "../Layout/Sidebar";
import { getAccessToken } from "../utils/setAuthToken";



export default function PrivateRoutes({ children, title }) {
  useEffect(() => {

    document.body.classList.toggle('fixed-navbar');
  }, []);
  const navigate = useNavigate();
 
  let token = getAccessToken()
  
  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true })
    }

  }, [token])

  return (
    <>
      <Navbar />
      <Sidebar />


      <div class="app-content content dashboard">
        <div class="content-wrapper">
          <div class="content-body">
            {children}
          </div>
        </div>
      </div>
    </>

  );
}

PrivateRoutes.propTypes = {

}

