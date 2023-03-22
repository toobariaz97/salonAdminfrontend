import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { bookingDetails } from '../../services/bookings';
import { formatTime, format_date } from '../../utils/helpers';

export const BookingDetails = () => {

  let { id } = useParams();
  const [booking, setBooking] = useState({});
  const [mainImage, setMainImage] = useState({});
  const [profit, setProfit] = useState("");
  const fetch = async () => {
    try {
      let data = await bookingDetails(id);
      let main = data?.booking?.service?.images?.find(e => e.type = "main")
      setMainImage(main)
      setProfit(data?.totalProfit)
      setBooking(data?.booking)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(mainImage);



  useEffect(() => {
    fetch();
    
  }, [])
  return (
    <>
      {/* Basic form layout section start */}

      <section id="configuration">
        {/* User Details Starts */}
        <div className="box py-5 px-lg-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <a href="index.php" className="d-inline-block me-2"><img src="../../images/back-2.png" alt="" /></a>
                <h1 className="main-heading d-inline-block mb-0">Booking Details</h1>
              </div>
            </div>
            <div className="col-lg-6 text-end">

              <label className="active-span">{booking?.status}</label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 mt-2">
              {
                booking && (
                  <img src={mainImage ? mainImage?.path : "../../images/booking-details-2.png"} alt="" className="img-fluid booking-img" />
                )
              }
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <h3 className="booking-heading mt-3">Bar</h3>
              <p className="lbl-value">{booking?.service?.description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-2 col-lg-3 col-md-6 mt-3">
              <h3 className="booking-heading mt-3">Service</h3>
              <p className="lbl-value">{booking?.service?.serviceType}</p>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-6 mt-3">
              <h3 className="booking-heading mt-3">Event Type</h3>
              <p className="lbl-value"> {booking?.service?.eventType}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <h3 className="booking-heading mt-3">Details</h3>
              <div className="booking-back">
                <div className="row">
                  <div className="col-xl-4 mt-2">
                    <h3 className="booking-heading-2">User Name</h3>
                    <p className="booking-value">{booking?.user?.name}</p>
                  </div>
                  <div className="col-xl-4 mt-2">
                    <h3 className="booking-heading-2">Booking ID</h3>
                    <p className="booking-value">ID:{booking?.booking_id}</p>
                  </div>
                  <div className="col-xl-4 mt-2">
                    <h3 className="booking-heading-2">Date</h3>
                    <p className="booking-value">{format_date(booking?.createdAt)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <h3 className="booking-heading mt-4">Slot</h3>
              <div className="booking-back">
                <div className="row">
                  <div className="col-xl-6 mt-2">
                    <h3 className="booking-heading-2">Enter Time</h3>
                    <p className="booking-value mb-0">{(booking?.timeSlot?.from)} PM</p>
                    <p className="booking-value-2">{format_date(booking?.date)}</p>
                  </div>
                  <div className="col-xl-6 mt-2">
                    <h3 className="booking-heading-2">Exit Time</h3>
                    <p className="booking-value mb-0">{booking?.timeSlot?.to}PM</p>
                    <p className="booking-value-2">{format_date( booking?.date)}</p>
                  </div>
                </div>
              </div>
              <h3 className="booking-heading mt-4">Payment Details</h3>
              <div className="booking-back">
                <div className="row">
                  <div className="col-xl-6 mt-2">
                    <h3 className="booking-value mb-0">Amount Paid</h3>
                  </div>
                  <div className="col-xl-6 mt-2">
                    <p className="booking-value">$ {booking?.total_amount}</p>
                  </div>
                  <div className="col-xl-6 mt-2">
                    <p className="booking-value mb-0">Platform's Commission</p>
                  </div>
                  <div className="col-xl-6 mt-2">
                    <p className="booking-value">10%</p>
                  </div>
                  <div className="col-xl-6 mt-2">
                    <label htmlFor className="all-lbl mb-0">Amount Paid</label>
                  </div>
                  <div className="col-xl-6 mt-2">
                    <p className="ttl-paid">${booking?.total_amount}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 mt-5">
              <div className="booking-back h-100 d-lg-flex align-items-start flex-column">
                <div className="row w-100">
                  <div className="col-xl-6 mt-2">
                    <h3 className="booking-value mb-0">Amount Paid</h3>
                  </div>
                  <div className="col-xl-6 mt-2">
                    <p className="booking-value">${booking?.total_amount}</p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-xl-6 mt-2">
                    <p className="booking-value mb-0">Total</p>
                  </div>
                  <div className="col-xl-6 mt-2">
                    <p className="booking-value">${booking?.total_amount}</p>
                  </div>
                </div>
                <div className="row mt-auto w-100">
                  <div className="col-xl-6 mt-2">
                    <label htmlFor className="all-lbl">Total Profit</label>
                  </div>
                  <div className="col-xl-6 mt-2">
                    <p className="ttl-paid">{profit}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
