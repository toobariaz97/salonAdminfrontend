import { findIndex } from 'lodash';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { SearchTable } from '../../components/SearchTable';
import Table from '../../components/Table';
import useMessagePopup from '../../Hooks/useMessagePopup';
import { changeEventStatus, getEvents } from '../../services/events';
import { AddEvent } from './AddEvent'

const tableFields = [
  {
    key: "eventName",
    label: "Event Type"
  },
  {
    key: "status",
    label: "Status",
    format: value => {
      if (value) return "Active"
      return "InActive"
    }
  }
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

export const Listing = () => {


  const [events, setEvents] = useState({});
  console.log(events);
  const [filteValues, setFilterValues] = useState([]);
const {confirmPopup,successPopup,errorPopup}= useMessagePopup()

  const updateStatus=async(id)=>{
    confirmPopup({
      message: 'Are you sure you want to change user status?',
      onConfirm: async() => {
        
        try {
         let {status,message}= await  changeEventStatus(id);
         console.log(status,message);
         if(status){
              let eventArr = [...events?.data];
              console.log(eventArr)
              console.log(id);
              let index = findIndex(eventArr, (item) => item._id === id);
              eventArr[index].status =  !eventArr[index].status
              successPopup({message})
              setEvents({...events, data : eventArr});
          }
        } catch (error) {
          console.log(error);
          errorPopup(
            error
          );
        }
      }


    });

  }


  const fetch = async (page = 1) => {
    try {
      let data = await getEvents({ page, ...filteValues });
      setEvents(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch()
  }, [filteValues?.status, filteValues?.from, filteValues?.to, filteValues?.searchString, filteValues?.entries])


  return (
    <>

      <section id="configuration">
        {/* User Management Starts */}
        {/* Search Filter Starts */}
        {/* Search Filter Ends */}
        <div className="dataTables_wrapper box">
          <h1 className="main-heading">Event Type Management</h1>
          <div className="text-end">
            <button className="general-btn" type="button" data-bs-toggle="modal" data-bs-target="#add-event">ADD EVENT TYPE</button>
          </div>
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
                    fields={tableFields}
                    data={events}
                    hasPagination={true}
                    pageChanged={page=>fetch(page)}
                    extraHeads={() => (
                      <th className='sorting'>Actions</th>
                    )
                    }
                    extraCells={
                      (item) => (
                        <div className="btn-group">
                          <button type="button" className="btn transparent-btn ellipsis-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
                          <div className="dropdown-menu text-left custom-dropdown">

                            {
                              item?.status ?
                                <a className="dropdown-item" href="#_" onClick={()=>updateStatus(item._id)}>
                                  <i className="fas fa-toggle-on" />Inactive</a>
                                :
                                <a className="dropdown-item" href="#_"  onClick={()=>updateStatus(item._id)}>
                                  <i className="fas fa-toggle-on" />Active</a>
                            }
                          </div>
                        </div>
                      )
                    }

                  />
  
                </div>
              </div>
            </div>
          </div>
      
        </div>
        {/* User Management Ends */}
        <AddEvent events={fetch} />
      </section>

    </>
  )
}
