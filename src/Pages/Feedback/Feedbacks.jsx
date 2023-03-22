import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { SearchTable } from '../../components/SearchTable'
import Table from '../../components/Table';
import useMessagePopup from '../../Hooks/useMessagePopup';
import { getFeedbacks } from '../../services/feedbacks';
import { format_date } from '../../utils/helpers';
export const userTableFields = [
  {
    label: "Name ",
    key: "username"
  },
  {
    label: "Email Address",
    key: "email"
  },
  {
    label: "Date",
    key: "createdAt",
    format: format_date
  },
  // {
  //   label: "Status",
  //   key: "status",
  //   format: (value) => {
  //     if (value)
  //       return 'Active';
  //     return 'In Active';
  //   },
  // }, 
]

const tableFilter = [
  {
    id: true,
    label: "Active"
  },
  {
    id: false,
    label: "Inactive"
  }
]
export const Feedbacks = () => {



  const [feedbacks, setFeedbacks] = useState({});
  const [filteValues, setFilterValues] = useState([]);
  const { confirmPopup, successPopup, errorPopup } = useMessagePopup()

  const fetch = async (page = 1) => {

    try {
      let data = await getFeedbacks({ page, ...feedbacks });
      setFeedbacks(data)

    } catch (error) {
      errorPopup(error)
    }
  }

  useEffect(() => {
    fetch()
  }, [filteValues?.status,filteValues?.from,filteValues?.to,filteValues?.searchString,filteValues?.entries])
  return (
    <>
      <section id="configuration">
        {/* User Management Starts */}
        {/* Search Filter Starts */}
        {/* Search Filter Ends */}
        <div className="dataTables_wrapper box">
          <h1 className="main-heading">Feedbacks Management</h1>
          <SearchTable
            filterValues={tableFilter}
            entries={[10, 25, 50]}
            onFilterChange={status => setFilterValues({ ...filteValues, ...status })}
            onDateChange={(from, to) => setFilterValues({ ...filteValues, ...from, ...to })}
            onSearch={searchString => setFilterValues({ ...filteValues, ...searchString })}
            onEntryChange={entries => setFilterValues({ ...filteValues, ...entries })}
          />
          <div className="row row-table">
            <div className="dataTables_wrapper container-fluid dt-bootstrap4">
              <div className="row">
                <div className="col-12">
                  <Table
                    fields={userTableFields}
                    data={feedbacks}
                    hasPagination={true}
                    extraHeads={
                      () => (
                        <th className='sorting'>Action</th>
                      )
                    }
                    extraCells={(item) => (
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn transparent-btn ellipsis-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
                          <div className="dropdown-menu text-left custom-dropdown">
                            <Link className="dropdown-item" to={`/feedback/${item._id}`}>
                              <i className="far fa-eye" />View</Link>

                          </div>
                        </div>
                      </td>
                    )}
                    pageChanged={(page) => fetch(page)}
                  />


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
