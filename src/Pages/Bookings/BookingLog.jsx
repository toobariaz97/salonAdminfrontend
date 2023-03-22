import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchTable } from '../../components/SearchTable'
import Table from '../../components/Table'
import { bookingLog } from '../../services/bookings'
import { getAllServices } from '../../services/service'
import { format_date } from '../../utils/helpers'

export const bookingField = [

  {
    label: "User Name",
    key: "user",
    format: value => value?.name
  },
  {
    label: "Vendor Name",
    key: "vendor",
    format: value => value?.name
  },
  {
    label: "Service",
    key: "service",
    format: value => value?.serviceType
  },
  {
    label: "Event Type",
    key: "service",
    format: value => value.eventType
  },
  {
    label: "Date",
    key: "createdAt",
    format: format_date
  },
  {

  },

  {
    key: "total_amount",
    label: "Amount",
    // format: value => value.price
  },
  {
    key: "status",
    label: "Status"

  }

]


const tableFilter=[
  {
    id:true,
    label:"Active"
  },
  {
    id:false,
    label:"Inactive"
  }
]

export const BookingLog = () => {

  const [filterValues, setFilterValues] = useState({});
  const [bookings, setBookings] = useState({});
  const [services,setService]=useState([]);
  console.log(services);
  console.log(bookings, 57);

  const fetch = async (page = 1) => {
    try {
      let data = await bookingLog({ page, ...filterValues });
      setBookings(data);
      let getService= await getAllServices()
      setService(getService?.data)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetch()
  }, [filterValues?.status,filterValues?.from,filterValues?.to,filterValues?.searchString,filterValues?.entries])

  return (
    <>

   
      <section id="configuration">
        {/* User Management Starts */}
        {/* Search Filter Starts */}
        {/* Search Filter Ends */}
        <div className="dataTables_wrapper box">
          <h1 className="main-heading">Booking Logs</h1>
         <SearchTable
         filterValues={tableFilter}
         entries={[10,25,50]}
         onFilterChange={status=>setFilterValues({...filterValues,...status})}
         onDateChange={(from,to)=>setFilterValues({...filterValues,...from,...to})}
         onSearch={searchString=>setFilterValues({...filterValues,...searchString})}
         onEntryChange={entries=>setFilterValues({...filterValues,...entries})}
         >
               <div className="userInput mb-3 d-sm-flex align-items-center justify-content-end">
                <label className="filterLabel d-inline-block mb-xxl-0 me-1 mb-2">Sort By:</label>
                <select className="d-inline-block dashInput sm-dropdown">
                  {
                    services?.map((service,index)=>(<>
                      <option value disabled hidden selected>Services</option>
                       <option value={service?.serviceName} key={index}>{service?.serviceName}</option>
                    </>

                    ))
                  }
                </select>
              </div>

         </SearchTable>
         
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
                  <option value disabled hidden selected>Services</option>
                  <option value={1}>Active</option>
                  <option value={2}>Inactive</option>
                </select>
              </div>
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
                    data={bookings}
                    hasPagination={true}
                    extraHeads={() => (
                      <th className='sorting'>Action</th>
                    )}
                    extraCells={(item) => (
                      <div className="btn-group">
                        <button type="button" className="btn transparent-btn ellipsis-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
                        <div className="dropdown-menu text-left custom-dropdown">
                          <Link className="dropdown-item" to={`/booking-details/${item._id}`}>
                            <i className="far fa-eye" />View</Link>
                        </div>
                      </div>
                    )}

                  />
                  {/* <div className="main-tabble table-responsive">
                <table className="table table-borderless dataTable">
                  <thead>
                    <tr>
                      <th className="sorting">S.No.</th>
                      <th className="sorting">User Name</th>
                      <th className="sorting">Vendor Name</th>
                      <th className="sorting">Service</th>
                      <th className="sorting">Event Type</th>
                      <th className="sorting">Date</th>
                      <th className="sorting">Amount</th>
                      <th className="sorting">Status</th>
                      <th className="sorting">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tableRow">
                      <td>01</td>
                      <td><img src="../../images/avatar2.png" className="table-img" />Mark Carson</td>
                      <td><img src="../../images/avatar2.png" className="table-img" />John Doe</td>
                      <td>01/02/2022</td>
                      <td>Photography</td>
                      <td>Wedding</td>
                      <td>$200</td>
                      <td><span className="green-span">On Going</span></td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn transparent-btn ellipsis-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
                          <div className="dropdown-menu text-left custom-dropdown">
                            <a className="dropdown-item" href="./booking-details-ongoing.php">
                              <i className="far fa-eye" />View</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="tableRow">
                      <td>01</td>
                      <td><img src="../../images/avatar2.png" className="table-img" />Mark Carson</td>
                      <td><img src="../../images/avatar2.png" className="table-img" />John Doe</td>
                      <td>01/02/2022</td>
                      <td>Venue</td>
                      <td>Funeral</td>
                      <td>$200</td>
                      <td>Completed</td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn transparent-btn ellipsis-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
                          <div className="dropdown-menu text-left custom-dropdown">
                            <a className="dropdown-item" href="./booking-details-completed.php">
                              <i className="far fa-eye" />View</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="tableRow">
                      <td>01</td>
                      <td><img src="../../images/avatar2.png" className="table-img" />Mark Carson</td>
                      <td><img src="../../images/avatar2.png" className="table-img" />John Doe</td>
                      <td>01/02/2022</td>
                      <td>Videography</td>
                      <td>Birthday</td>
                      <td>$200</td>
                      <td>Upcoming</td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn transparent-btn ellipsis-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
                          <div className="dropdown-menu text-left custom-dropdown">
                            <a className="dropdown-item" href="./booking-details-upcoming.php">
                              <i className="far fa-eye" />View</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center  my-md-3 p-md-3 p-2 table-responsive">
            <div className="col-lg-5 col-sm-12 col-md-12">
              <h6 className="pagination-details"> Showing 05 out of 40 records </h6>
            </div>
        
          </div>
        </div>
        {/* User Management Ends */}
      </section>
    </>
  )
}
