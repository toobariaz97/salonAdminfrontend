import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { SearchTable } from '../../components/SearchTable'
import Table from '../../components/Table'
import { getPayments } from '../../services/payments'
import { format_date } from '../../utils/helpers'
export const paymentsField = [

  {
    label: "User Name",
    key: "user",
    format: value => value?.name
  },
  {
    label: "Service",
    key: "service",
    format: value => value?.serviceType
  },
  {
    label: "Date",
    key: "createdAt",
    format: format_date
  },
  
  {
    key: "platformComission",
    label: "Plateform Commision",
    // format: value => value.price
  },
  {
    label: "PAYMENT AGAINST VENDOR",
    key: "vendor",
    format: value => value?.name
  },
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


export const PaymentLog = () => {


  const [payments,setPayment]=useState([]);
  const [filterValues,setFilterValues]=useState([])


  const fetch=async(page=1)=>{

    try {
      let data= await getPayments({page,...filterValues});
      setPayment(data)
    
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetch()
  },[filterValues?.status,filterValues?.from,filterValues?.to,filterValues?.searchString,filterValues?.entries])
  return (
    <>
    <section id="configuration">
  {/* User Management Starts */}
  {/* Search Filter Starts */}
  {/* Search Filter Ends */}
  <div className="dataTables_wrapper box">
    <h1 className="main-heading">Payment Logs</h1>
    <SearchTable
    //  filterValues={tableFilter}
     entries={[10,25,50]}
    //  onFilterChange={status=>setFilterValues({...filterValues,...status})}
     onDateChange={(from,to)=>setFilterValues({...filterValues,...from,...to})}
     onSearch={searchString=>setFilterValues({...filterValues,...searchString})}
     onEntryChange={entries=>setFilterValues({...filterValues,...entries})}
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
            fields={paymentsField}
            data={payments}
            />
            {/* <div className="main-tabble table-responsive">
              <table className="table table-borderless dataTable">
                <thead>
                  <tr>
                    <th className="sorting">S.No.</th>
                    <th className="sorting">Name</th>
                    <th className="sorting">Service</th>
                    <th className="sorting">Date</th>
                    <th className="sorting">Amount</th>
                    <th className="sorting">Platform's Commission(%)</th>
                    <th className="sorting">Payment Against Vendor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tableRow">
                    <td>01</td>
                    <td><img src="../../images/avatar2.png" className="table-img" />Mark Carson</td>
                    <td>Photography</td>
                    <td>01/02/2022</td>
                    <td>$200</td>
                    <td>10%</td>
                    <td><img src="../../images/avatar2.png" className="table-img" />John Doe</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </div>
 

  </div>
  {/* User Management Ends */}
</section>

    </>
  )
}
