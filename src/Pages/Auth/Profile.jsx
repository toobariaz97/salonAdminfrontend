import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Profile = () => {
  const { user } = useSelector((state) => state?.auth)

  return (
    <>
    <section id="configuration">
  {/* User Details Starts */}
  <div className="box py-5 px-lg-5">
    <h1 className="main-heading">My Profile</h1>
    <div className="row justify-content-center">
      <div className="col-12 text-center">
        <img src={user && (user?.image_url?.includes('undefined') ? "images/avatar.png" : user?.image_url)} alt="avatar" className="userAvatar img-fluid" />
        <div>
          <Link to="/change-password" className="chnage-pwd d-inline-block mt-2">Change Password</Link>
        </div>
      </div>
      <div className="col-xl-2 col-md-4">
        <label htmlFor className="all-lbl">Name</label>
        <p className="lbl-value">{user && (user ? user?.name : "guest")}</p>
      </div>
      <div className="offset-xl-2 col-xl-2 col-md-4">
        <label htmlFor className="all-lbl">Email</label>
        <p className="lbl-value">{user && (user?.email)}</p>
      </div>
      <div className="mt-5 text-center">
        <Link to="/edit-profile" className="general-btn d-inline-block mt-2">Edit Profile</Link>
        <div className="mt-2">
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
