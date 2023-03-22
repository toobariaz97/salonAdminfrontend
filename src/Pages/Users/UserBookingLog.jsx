import React from 'react'
import { SearchTable } from '../../components/SearchTable'
import Table from '../../components/Table'


export const bookingField = [
    
        {
            key: "Booking ID",
            label: "booking_id",
            format: value => value?.booking_id
        },
    {
        key: "vendor",
        label: "Vendor Name",
        format: value => value?.name
    },
    {
        key: "service",
        label: "Service",
        format: value => value?.serviceName
    },
    {
        key: "events",
        label: "Event Type",
        format: value => value?.eventType
    },
    {
        key: "service",
        label: "Service",
        format:value=>value.service_name
    },
    {

    },

    {
        key: "service",
        label: "Amount",
        format:value=>value.price
    },
    {
        key: "Status",
        label: "status"
    }
]
export const UserBookingLog = () => {
  return (
    <div className="dataTables_wrapper box mt-lg-5 mt-3">
    <h1 className="main-heading">Booking Logs</h1>
   <SearchTable
    />
    {/* <div className="d-xl-flex align-items-center justify-content-between mb-3 py-md-4 py-1">
      <div>
        <div className="userInput mb-3 d-md-flex align-items-end">
          <label className="filterLabel d-inline-block mb-3 mb-xxl-2 me-3">Filter By:</label>
          <div className="flex-grow-1 d-block d-sm-flex">
            <div className="mt-md-0 mt-3 date-wrap">
              <p className="filterLabel mb-1 ps-4">From</p>
              <input type="date" className="dashInput date-fliter" />
            </div>
            <div className="mt-md-0 mt-3 date-wrap">
              <p className="filterLabel mb-1 ps-4">To</p>
              <input type="date" className="dashInput ms-md-2 date-fliter" />
            </div>
          </div>
        </div>
        <div className="userInput mb-3 d-flex align-items-center">
          <label className="filterLabel d-inline-block mb-3 mb-xxl-0 me-3">Showing</label>
          <select className="d-inline-block dashInput sm-dropdown mb-1">
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <label className="filterLabel d-inline-block mb-3 mb-xxl-0 ms-3">Entries</label>
        </div>
      </div>
      <div className>
        <div className="userInput mb-3 d-sm-flex align-items-center justify-content-end">
          <label className="filterLabel d-inline-block mb-xxl-0 me-1 mb-2">Sort By:</label>
          <select className="d-inline-block dashInput sm-dropdown">
            <option value disabled hidden selected>All</option>
            <option value={1}>Active</option>
            <option value={2}>Inactive</option>
          </select>
        </div>
        <div className="userInput mb-2">
          <div className="form-field mb-3">
            <div className="d-xl-flex align-items-center justify-content-end">
              <div className="dataTables_filter text-end">
                <div className="dashSearchWrap">
                  <form action>
                    <input type="text" id="search-inp" className="dashInput search-input w-100 right-icon-input ms-0" placeholder="Search" />
                    <button type="submit" className="search-icon"><i className="fas fa-search" /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div className="row row-table">
      <div className="dataTables_wrapper container-fluid dt-bootstrap4">
        <div className="row">
          <div className="col-12">
           <Table
           fields={bookingField}
           />
            {/* <div className="main-tabble table-responsive">
              <table className="table table-borderless dataTable">
                <thead>
                  <tr>
                    <th className="sorting">S.No.</th>
                    <th className="sorting">Bookin Id</th>
                    <th className="sorting">Vendor Name</th>
                    <th className="sorting">Service</th>
                    <th className="sorting">Date</th>
                    <th className="sorting">Slot</th>
                    <th className="sorting">Amount</th>
                    <th className="sorting">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tableRow">
                    <td>01</td>
                    <td>abc</td>
                    <td><img src="../../images/avatar2.png" className="table-img" />Mark Carson</td>
                    <td>photography</td>
                    <td>01/02/2022</td>
                    <td>10:00 am to 11:00 am</td>
                    <td>$200</td>
                    <td><span className="green-span">Ongoing</span></td>
                  </tr>
                  <tr className="tableRow">
                    <td>01</td>
                    <td>abc</td>
                    <td><img src="../../images/avatar2.png" className="table-img" />Mark Carson</td>
                    <td>Venue</td>
                    <td>01/02/2022</td>
                    <td>10:00 am to 11:00 am</td>
                    <td>$200</td>
                    <td>History</td>
                  </tr>
                  <tr className="tableRow">
                    <td>01</td>
                    <td>abc</td>
                    <td><img src="../../images/avatar2.png" className="table-img" />Mark Carson</td>
                    <td>Videography</td>
                    <td>01/02/2022</td>
                    <td>10:00 am to 11:00 am</td>
                    <td>$200</td>
                    <td>History</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    {/* <div className="row align-items-center  my-md-3 p-md-3 p-2 table-responsive">
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
    </div> */}
  </div>  )
}
