import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { viewUser } from '../../services/users';
import { UserBookingLog } from './UserBookingLog';

export const ViewUser = () => {

  let { id } = useParams();
  const [user, setUser] = useState({});
  console.log(user, 10);
  let fetch = async (page=1) => {
    try {

      let data = await viewUser(id,{page});
      setUser(...data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetch()
  }, [])
  return (
    <><section id="configuration">
      {/* User Details Starts */}
      <div className="box py-5 px-lg-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex align-items-center">
              <a href="index.php" className="d-inline-block me-2"><img src="images/back-2.png" alt="" /></a>
              <h1 className="main-heading d-inline-block mb-0">User Details</h1>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            {user && (user?.status === true ?
              <label className="active-span">Active</label>
              :

              <label className="inactive-span">InActive</label>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <img src={user && (user?.image_url?.includes("undefined") ? "../../images/avatar.png" : user?.image_url)} alt="avatar" className="userAvatar img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">Name</label>
            <p className="lbl-value">{user && user?.name}</p>
          </div>
          <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">Email Address</label>
            <p className="lbl-value">{user?.email}</p>
          </div>
          <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">Phone number</label>
            <p className="lbl-value">{user && (user?.phone ? user?.phone : "-")}</p>
          </div>
          <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">Total Amount Spent</label>
            <p className="lbl-value">$20</p>
          </div>
        </div>
      </div>
      <UserBookingLog />
    </section>
    </>
  )
}
