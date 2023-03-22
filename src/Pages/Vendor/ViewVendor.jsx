import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { vendorDetails } from '../../services/vendors';
import { VendorLogs } from './VendorLogs';

export const ViewVendor = () => {

  let { id } = useParams()
  const [vendor, setVendor] = useState([]);
  console.log(vendor);

  const fetch = async () => {
    try {
      let data = await vendorDetails(id);
      setVendor(...data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetch();
  }, [vendor?._id])


  return (
    <>
      <section id="configuration">
        {/* User Details Starts */}
        <div className="box py-5 px-lg-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <Link to="/vendor" className="d-inline-block me-2">
                  <img src="../../images/back-2.png" alt="back" />
                  </Link>
                <h1 className="main-heading d-inline-block mb-0">Vendor Details</h1>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              {
                vendor?.status ? 
                <label className="active-span">Active</label>:
                <label className="inactive-span">InActive</label>
                
              }
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <img src={vendor?.image_url?.includes("undefined") ? "../../images/avatar.png": vendor?.image_url} alt="avatar" className="userAvatar img-fluid" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
              <label htmlFor className="all-lbl">Name</label>
              <p className="lbl-value">{vendor?.name}</p>
            </div>
            <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
              <label htmlFor className="all-lbl">Email Address</label>
              <p className="lbl-value">{vendor?.email}</p>
            </div>
            <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
              <label htmlFor className="all-lbl">Phone number</label>
              <p className="lbl-value">{vendor?.phone}</p>
            </div>
          </div>
        </div>
        <VendorLogs vendorBooking={vendor?.vendorBookings} services={vendor?.services}/>

      </section>

    </>
  )
}
