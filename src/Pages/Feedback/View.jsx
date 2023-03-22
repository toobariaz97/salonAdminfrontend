import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { viewFeedback } from '../../services/feedbacks';

export const View = () => {

  let { id } = useParams()

  const [feedback, setFeedback] = useState({});

  let fetch = async () => {
    try {

      let data = await viewFeedback(id);
      setFeedback(data)

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
              <a href="index.php" className="d-inline-block me-2"><img src="../../images/back-2.png" alt="" /></a>
              <h1 className="main-heading d-inline-block mb-0">Feedback Details</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">First Name</label>
            <p className="lbl-value">Mark</p>
          </div>
          <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">Last Name</label>
            <p className="lbl-value">Carson</p>
          </div>
          <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">User Type</label>
            <p className="lbl-value">Vendor</p>
          </div>
          <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">Subject</label>
            <p className="lbl-value">Abc</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">Email Address</label>
            <p className="lbl-value">abc@xyz.com</p>
          </div>
          <div className="col-xxl-2 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">Date</label>
            <p className="lbl-value">01/02/2022</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-lg-5 mt-3">
            <label htmlFor className="all-lbl">Message</label>
            <p className="lbl-value">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iure totam architecto maxime quis at eos dolores, ipsam officiis labore explicabo magni</p>
          </div>
        </div>
      </div></section>
    </>
  )
}
