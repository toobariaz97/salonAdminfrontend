import { findIndex } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SearchTable } from '../../components/SearchTable';
import Table from '../../components/Table';
import useMessagePopup from '../../Hooks/useMessagePopup';
import { getVendors, UpdateStatus } from '../../services/vendors';
import { format_date } from '../../utils/helpers';

export const userTableFields = [
  {
  label: "Name ",
    key: "name"
  },
  {
    label: "Email",
    key: "email"
  },
  {
    label: "REGISTRATION ON",
    key: "createdAt",
    format:format_date
  },
  {
    label: "Status",
    key: "status",
    format: (value) => {
      if (value)
        return 'Active';
      return 'In Active';
    },
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
export const VendorListing = () => {
  const [users,setUsers]=useState({});
  const [filteValues,setFilterValues]=useState([]);
  const {confirmPopup,successPopup,errorPopup}= useMessagePopup();


  const changeStatus = async (id) => {
    confirmPopup({
      message: 'Are you sure you want to change user status?',
      onConfirm: async() => {
        
        try {
         let {status,message}= await  UpdateStatus(id);
               if(status){
              let vendorArr = [...users?.data];
            
              let index = findIndex(vendorArr, (item) => item._id === id);
              vendorArr[index].status =  !vendorArr[index].status
              successPopup({message})
              setUsers({...users, data : vendorArr});
          }
        } catch (error) {
          console.log(error);
          errorPopup(
            error
          );
        }
      }


    });
  };
  let fetch= async(page=1)=>{
    try {
      
      let data= await getVendors({page,...filteValues});
      setUsers(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{

    fetch()
  },[filteValues?.status,filteValues?.from,filteValues?.to,filteValues?.searchString,filteValues?.entries])
 
  return (
    <>
    <section id="configuration">

  <div className="dataTables_wrapper box">
    <h1 className="main-heading">Vendors Management</h1>

    <SearchTable
   filterValues={tableFilter}
   entries={[10,25,50]}
   onFilterChange={status=>setFilterValues({...filteValues,...status})}
   onDateChange={(from,to)=>setFilterValues({...filteValues,...from,...to})}
   onSearch={searchString=>setFilterValues({...filteValues,...searchString})}
   onEntryChange={entries=>setFilterValues({...filteValues,...entries})}
   />
    <div className="row row-table">
      <div className="dataTables_wrapper container-fluid dt-bootstrap4">
        <div className="row">
          <div className="col-12">
          <Table
            fields={userTableFields}
            data={users}
            hasPagination={true}
            extraHeads={
              ()=>(
                <th className='sorting'>Action</th>
              )
            }
            extraCells={(item)=>(
              <td>
                  <div className="btn-group">
                        <button type="button" className="btn transparent-btn ellipsis-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-v" /></button>
                        <div className="dropdown-menu text-left custom-dropdown">
                          <Link className="dropdown-item" to={`/vendor-detail/${item._id}`}>
                            <i className="far fa-eye" />View</Link>
                            {
                            item?.status===true ?
                            
                          <a className="dropdown-item" href="#_" data-bs-toggle="modal" data-bs-target="#inactive-modal" onClick={()=>changeStatus(item?._id)}>
                            <i className="fas fa-toggle-on" />Inactive</a>
                           :
                             <a className="dropdown-item" href="#_" data-bs-toggle="modal" data-bs-target="#inactive-modal"  onClick={()=>changeStatus(item?._id)}>
                             <i className="fas fa-toggle-on" />Active</a>
                          }
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
