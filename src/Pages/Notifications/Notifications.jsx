import React from 'react'

export const Notifications = () => {
  return (
    <>
    <section id="configuration">
  <h1 className="main-heading">Notifications</h1>
  <div className="userInput mb-3">
    <select className="d-inline-block dashInput sm-dropdown">
      <option value disabled hidden selected>All</option>
      <option value={1}>Read</option>
      <option value={2}>Unread</option>
    </select>
  </div>
  <div className="box py-lg-5 py-3">
    <div className="row">
      <div className="col-12">
        <div className="d-lg-flex align-items-center hover_notification mb-5">
          <div className="notif-icon mb-1 me-3 flex-shrink-0">
            <img src="../../images/bell.png" alt="" />
          </div>
          <div className="mb-1 w-100">
            <p className="mb-0">
              Lorem Ipsum is simply dummy text of printing &amp; typesetting industry.
            </p>
            <div className="d-md-flex align-items-center justify-content-between">
              <div className="notification-time-date">
                <h6 className="notification-text mb-0">Dec 19, 2020</h6><span className="mx-2">|</span>
                <h6 className="notification-text mb-0">10:30 AM</h6>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button className="general-btn">MARK AS READ</button>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="d-lg-flex align-items-center hover_notification mb-5">
          <div className="notif-icon mb-1 me-3 flex-shrink-0">
            <img src="../../images/bell.png" alt="" />
          </div>
          <div className="mb-1 w-100">
            <p className="mb-0">
              Lorem Ipsum is simply dummy text of printing &amp; typesetting industry.
            </p>
            <div className="d-md-flex align-items-center justify-content-between">
              <div className="notification-time-date">
                <h6 className="notification-text mb-0">Dec 19, 2020</h6><span className="mx-2">|</span>
                <h6 className="notification-text mb-0">10:30 AM</h6>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button className="general-btn-3">MARK AS UNREAD</button>
          </div>
        </div>
      </div>
      <div className="row align-items-center  my-md-3 p-md-3 p-2 table-responsive">
        <div className="col-lg-5 col-sm-12 col-md-12">
          <h6 className="pagination-details"> Showing 05 out of 40 records </h6>
        </div>
        <div className="col-lg-7 col-sm-12 col-md-12">
          <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
            <ul className="pagination">
              <div className="pagination_wrapper d-flex align-items-center justify-content-center">
                <li className="paginate_button page-item previous disabled"> <a href="#" className="page-link pure-black">Previous</a> </li>
                <li className="paginate_button page-item active"> <a href="#" className="page-link">01</a> </li>
                <li className="paginate_button page-item"> <a href="#" className="page-link">02</a> </li>
                <li className="paginate_button page-item"> <a href="#" className="page-link">03</a> </li>
                <li className="paginate_button page-item"> <a href="#" className="page-link">04</a> </li>
                <li className="paginate_button page-item next disabled " i> <a href="#" className="page-link pure-black">Next</a> </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}
